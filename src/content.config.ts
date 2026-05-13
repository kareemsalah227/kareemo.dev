import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experience = defineCollection({
  loader: glob({ base: "./src/content/experience", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    sortOrder: z.number(),
    role: z.string(),
    company: z.string(),
    dates: z.string(),
    location: z.string().optional(),
    summary: z.string(),
    impacts: z.array(z.string()),
    tech: z.array(z.string()),
    featuredHome: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    type: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featuredHome: z.boolean().default(false),
    href: z.string().url().optional(),
    github: z.string().url().optional(),
    note: z.string().optional(),
  }),
});

export const collections = { experience, projects };
