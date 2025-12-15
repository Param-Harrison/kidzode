import { useState, useEffect } from 'react';
import { db, User } from '@/lib/local-storage';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate initial check delay if needed, or just run immediately
    const currentUser = db.users.getCurrent();
    setUser(currentUser);
    setIsAuthenticated(!!currentUser);
    setIsLoading(false);
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated,
    logout: () => {
       db.users.logout();
       setUser(null);
       setIsAuthenticated(false);
    }
  };
}