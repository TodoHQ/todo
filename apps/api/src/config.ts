import packageJson from '../package.json' with { type: 'json' };

import { z } from 'zod';

export const ProcessEnvSchema = z.object({
    NAME: z.string().trim().default(packageJson.name),
    NODE_ENV: z.string().trim().default('development'),
    PORT: z.number().default(3000),
});

export const env = ProcessEnvSchema.parse(process.env);
