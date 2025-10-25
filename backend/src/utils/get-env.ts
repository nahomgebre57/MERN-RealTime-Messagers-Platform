export const getEnv = (key: string, defaultValue?: string) => {
  const val = process.env[key] ?? defaultValue;
  if (val === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return val;
};
