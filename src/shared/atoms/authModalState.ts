import { atom } from 'recoil';

export type AuthMode = 'REGISTER' | 'LOGIN';
export type AuthModalType = {
  visible: boolean;
  mode: AuthMode;
};

export const authModalState = atom<AuthModalType>({
  key: 'authModalState',
  default: {
    visible: false,
    mode: 'LOGIN',
  },
});
