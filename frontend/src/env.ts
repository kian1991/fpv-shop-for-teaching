import { z } from "zod";

const EnvSchema = z.object({
  VITE_PEXELS_API_KEY: z.string(),
});

const env = EnvSchema.safeParse(import.meta.env);
if (!env.success) {
  console.error("Invalid environment variables", env.error.format());
  throw new Error("Invalid environment variables");
}

export const ENV = env.data;
