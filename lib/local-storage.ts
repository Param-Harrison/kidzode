"use client";

export type UserType = "parent" | "teacher" | "student";

export interface User {
  id: number;
  name: string;
  email: string | null;
  userType: UserType;
  createdAt: string;
}

export interface Progress {
  studentId: number;
  courseId: string;
  lessonId: string;
  status: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
  data?: any;
  completedAt: string | null;
}

const STORAGE_KEYS = {
  CURRENT_USER: "kidzode_current_user",
  USERS: "kidzode_users", 
  PROGRESS: "kidzode_progress",
  BOOKMARKS: "kidzode_bookmarks",
  FEEDBACK: "kidzode_feedback"
};

// Mock ID generator
const generateId = () => Date.now();

export const db = {
  users: {
    getCurrent: (): User | null => {
      if (typeof window === "undefined") return null;
      const stored = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return stored ? JSON.parse(stored) : null;
    },
    
    login: (name: string): User => {
      const users = db.users.getAll();
      let user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
      
      if (!user) {
        // Create new user if not exists
        user = {
          id: generateId(),
          name,
          email: null,
          userType: "student", // Default to student for now
          createdAt: new Date().toISOString()
        };
        users.push(user);
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
      }
      
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      return user;
    },

    logout: () => {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    },

    getAll: (): User[] => {
      if (typeof window === "undefined") return [];
      const stored = localStorage.getItem(STORAGE_KEYS.USERS);
      return stored ? JSON.parse(stored) : [];
    }
  },

  progress: {
    save: (studentId: number, courseId: string, lessonId: string, status: string, data?: any) => {
      const allProgress: Progress[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || "[]");
      const existingIndex = allProgress.findIndex(p => 
        p.studentId === studentId && p.courseId === courseId && p.lessonId === lessonId
      );

      const newEntry: Progress = {
        studentId,
        courseId,
        lessonId,
        status: status as any,
        data,
        completedAt: status === "COMPLETED" ? new Date().toISOString() : null
      };

      if (existingIndex >= 0) {
        allProgress[existingIndex] = { ...allProgress[existingIndex], ...newEntry };
      } else {
        allProgress.push(newEntry);
      }

      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(allProgress));
      return newEntry;
    },

    get: (studentId: number, courseId?: string): Progress[] => {
      const allProgress: Progress[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || "[]");
      return allProgress.filter(p => 
        p.studentId === studentId && (!courseId || p.courseId === courseId)
      );
    },
    
    getCompletedCount: (studentId: number, courseId: string): number => {
      const allProgress: Progress[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || "[]");
      return allProgress.filter(p => 
        p.studentId === studentId && p.courseId === courseId && p.status === "COMPLETED"
      ).length;
    }
  }
};
