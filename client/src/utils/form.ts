export const hasErrors = (errors: { [k: string]: string }): number => {
  return Object.keys(errors).length;
};
