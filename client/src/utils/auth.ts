const STORAGE = localStorage;

export const setTokenInStorage = (token: string): void => {
  STORAGE.setItem("token", token);
};

export const getTokenFromStorage = (): string => {
  return STORAGE.token;
};
