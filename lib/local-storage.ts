import { getDB, kv, User, Progress, UserType } from './db';

export type { User, Progress, UserType };
export { kv };

const STORAGE_KEYS = {
  CURRENT_USER: "kidzode_current_user",
  USERS: "kidzode_users", 
  PROGRESS: "kidzode_progress",
  BOOKMARKS: "kidzode_bookmarks",
  FEEDBACK: "kidzode_feedback"
};

// Mock ID generator
const generateId = () => Date.now();

let isMigrated = false;

const migrateFromLocalStorage = async () => {
  if (isMigrated || typeof window === 'undefined') return;
  
  const dbInstance = await getDB();
  if (!dbInstance) return;

  const migratedKey = 'kidzode_indexeddb_migrated';
  const alreadyMigrated = localStorage.getItem(migratedKey);
  if (alreadyMigrated) {
    isMigrated = true;
    return;
  }

  console.log('[Kidzode] Starting migration from localStorage to IndexedDB...');

  // Migrate Users
  const localUsers = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
  for (const user of localUsers) {
    await dbInstance.put('users', user);
  }

  // Migrate Current User
  const localCurrentUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  if (localCurrentUser) {
    await kv.set(STORAGE_KEYS.CURRENT_USER, JSON.parse(localCurrentUser));
  }

  // Migrate Progress
  const localProgress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || '[]');
  for (const p of localProgress) {
    // Ensure status is lowercase
    const status = (p.status || 'not_started').toLowerCase();
    await dbInstance.put('progress', { ...p, status });
  }

  // Migrate Bookmarks
  const localBookmarks = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]');
  for (const b of localBookmarks) {
    await dbInstance.put('bookmarks', b);
  }

  // Migrate Feedback
  const localFeedback = JSON.parse(localStorage.getItem(STORAGE_KEYS.FEEDBACK) || '[]');
  for (const f of localFeedback) {
    await dbInstance.put('feedback', f);
  }

  localStorage.setItem(migratedKey, 'true');
  isMigrated = true;
  console.log('[Kidzode] Migration completed successfully!');
};

export const db = {
  users: {
    getCurrent: async (): Promise<User | null> => {
      await migrateFromLocalStorage();
      return await kv.get(STORAGE_KEYS.CURRENT_USER);
    },
    
    login: async (name: string): Promise<User> => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) throw new Error("Database not available");

      // Try to find existing user by name
      const users = await dbInstance.getAllFromIndex('users', 'by-name', name);
      let user = users[0];
      
      if (!user) {
        // Create new user if not exists
        user = {
          id: generateId(),
          name,
          email: null,
          userType: "student", // Default to student for now
          createdAt: new Date().toISOString()
        };
        await dbInstance.put('users', user);
      }
      
      await kv.set(STORAGE_KEYS.CURRENT_USER, user);
      return user;
    },

    logout: async () => {
      await kv.delete(STORAGE_KEYS.CURRENT_USER);
    },

    getAll: async (): Promise<User[]> => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) return [];
      return await dbInstance.getAll('users');
    }
  },

  progress: {
    save: async (studentId: number, courseId: string, lessonId: string, status: string, data?: any) => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) throw new Error("Database not available");

      const key: [number, string, string] = [studentId, courseId, lessonId];
      const existing = await dbInstance.get('progress', key);
      
      const newStatus = status.toLowerCase() as 'completed' | 'in_progress' | 'not_started';
      
      // Prevent downgrading from completed to something else
      let finalStatus = newStatus;
      if (existing && existing.status === 'completed' && newStatus !== 'completed') {
        finalStatus = 'completed';
      }

      const mergedData = {
        ...(existing?.data || {}),
        ...(data || {}),
        lastAccessedAt: new Date().toISOString()
      };

      const newEntry: Progress = {
        studentId,
        courseId,
        lessonId,
        status: finalStatus,
        data: mergedData,
        completedAt: (finalStatus === "completed") 
          ? (existing?.completedAt || new Date().toISOString()) 
          : (existing?.completedAt || null)
      };

      console.log(`[Kidzode] Saving progress: key=${JSON.stringify(key)}, status=${finalStatus}, previously=${existing?.status || 'none'}`);
      await dbInstance.put('progress', newEntry);
      return newEntry;
    },

    get: async (studentId: number, courseId?: string): Promise<Progress[]> => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) return [];

      console.log(`[Kidzode] Querying progress for student: ${studentId}, course: ${courseId}`);

      if (courseId) {
        return await dbInstance.getAllFromIndex('progress', 'by-student-course', [studentId, courseId]);
      } else {
        return await dbInstance.getAllFromIndex('progress', 'by-student', studentId);
      }
    },
    
    getCompletedCount: async (studentId: number, courseId: string): Promise<number> => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) return 0;
      
      const allProgress = await dbInstance.getAllFromIndex('progress', 'by-student-course', [studentId, courseId]);
      return allProgress.filter(p => p.status === "completed").length;
    }
  },

  bookmarks: {
    toggle: async (studentId: number, courseId: string, lessonId: string): Promise<boolean> => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) throw new Error("Database not available");

      const key: [number, string, string] = [studentId, courseId, lessonId];
      const existing = await dbInstance.get('bookmarks', key);

      if (existing) {
        await dbInstance.delete('bookmarks', key);
        return false;
      } else {
        await dbInstance.put('bookmarks', {
          studentId,
          courseId,
          lessonId,
          createdAt: new Date().toISOString()
        });
        return true;
      }
    },

    get: async (studentId: number, courseId: string, lessonId: string): Promise<boolean> => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) return false;
      const existing = await dbInstance.get('bookmarks', [studentId, courseId, lessonId]);
      return !!existing;
    }
  },

  feedback: {
    save: async (studentId: number, courseId: string, lessonId: string, thumbsUp: boolean, comment?: string) => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) throw new Error("Database not available");

      await dbInstance.put('feedback', {
        studentId,
        courseId,
        lessonId,
        thumbsUp,
        comment,
        createdAt: new Date().toISOString()
      });
    },

    get: async (studentId: number, courseId: string, lessonId: string) => {
      await migrateFromLocalStorage();
      const dbInstance = await getDB();
      if (!dbInstance) return null;
      return await dbInstance.get('feedback', [studentId, courseId, lessonId]);
    }
  }
};
