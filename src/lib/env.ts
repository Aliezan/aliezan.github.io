import { z } from "zod";

const envSchema = z.object({
  STRAPI_URL_ENDPOINT: z.string().min(1),
});

export const env = envSchema.parse(process.env);
