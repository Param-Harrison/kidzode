import { openDB, DBSchema, IDBPDatabase } from 'idb';

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
  status: "completed" | "in_progress" | "not_started";
  data?: any;
  completedAt: string | null;
}

export interface Bookmark {
  studentId: number;
  courseId: string;
  lessonId: string;
  createdAt: string;
}

export interface Feedback {
  studentId: number;
  courseId: string;
  lessonId: string;
  thumbsUp: boolean;
  comment?: string;
  createdAt: string;
}

interface KidzodeDB extends DBSchema {
  users: {
    key: number;
    value: User;
    indexes: { 'by-name': string };
  };
  progress: {
    key: [number, string, string]; // [studentId, courseId, lessonId]
    value: Progress;
    indexes: { 'by-student': number, 'by-student-course': [number, string] };
  };
  bookmarks: {
    key: [number, string, string];
    value: Bookmark;
    indexes: { 'by-student': number };
  };
  feedback: {
    key: [number, string, string];
    value: Feedback;
    indexes: { 'by-student': number };
  };
  settings: {
    key: string;
    value: any;
  };
}

const DB_NAME = 'kidzode_db';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase<KidzodeDB>> | null = null;

export const getDB = () => {
  if (typeof window === 'undefined') return null;
  
  if (!dbPromise) {
    dbPromise = openDB<KidzodeDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // Users store
        const userStore = db.createObjectStore('users', {
          keyPath: 'id',
        });
        userStore.createIndex('by-name', 'name');

        // Progress store
        const progressStore = db.createObjectStore('progress', {
          keyPath: ['studentId', 'courseId', 'lessonId'],
        });
        progressStore.createIndex('by-student', 'studentId');
        progressStore.createIndex('by-student-course', ['studentId', 'courseId']);

        // Bookmarks store
        const bookmarkStore = db.createObjectStore('bookmarks', {
          keyPath: ['studentId', 'courseId', 'lessonId'],
        });
        bookmarkStore.createIndex('by-student', 'studentId');

        // Feedback store
        const feedbackStore = db.createObjectStore('feedback', {
          keyPath: ['studentId', 'courseId', 'lessonId'],
        });
        feedbackStore.createIndex('by-student', 'studentId');

        // Settings store (for currentUser etc)
        db.createObjectStore('settings');
      },
    });
  }
  return dbPromise;
};

export const kv = {
  get: async (key: string) => {
    const db = await getDB();
    if (!db) return null;
    return db.get('settings', key);
  },
  set: async (key: string, value: any) => {
    const db = await getDB();
    if (!db) return;
    return db.put('settings', value, key);
  },
  delete: async (key: string) => {
    const db = await getDB();
    if (!db) return;
    return db.delete('settings', key);
  }
};
