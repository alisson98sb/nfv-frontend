import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  nome: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      setAuth: (token: string, user: User) => {
        set({ token, user });
      },

      clearAuth: () => {
        set({ token: null, user: null });
      },

      isAuthenticated: () => {
        return !!get().token;
      },
    }),
    {
      name: 'nfv-auth-storage',
    }
  )
);
