const STORAGE = localStorage;
const TOKEN = "token";

export const setIsLoggedIn = (token: string): void => {
  STORAGE.setItem(TOKEN, token);
};

export const getIsLoggedIn = (): string => {
  return STORAGE.getItem(TOKEN) as string;
};
