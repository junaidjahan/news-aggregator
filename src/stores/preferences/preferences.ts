import { atom } from "recoil";

export const preferences = atom({
    key: 'preferences',
    default: JSON.parse(localStorage.getItem('userTags')! ?? '[]')
  });
  