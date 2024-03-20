import { atom } from 'recoil';

export const authors = atom({
  key: 'auth',
  default: JSON.parse(localStorage.getItem('auth') ?? 'null')
});

export const sources = atom({
  key: 'user',
  default: {}
});