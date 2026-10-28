export const isExternalPath = (path: string): boolean =>
  /^(https?:)?\/\//.test(path);
