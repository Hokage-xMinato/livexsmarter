import { z } from "zod";

export const classItemSchema = z.object({
  title: z.string(),
  link: z.string(),
  batch: z.string().optional(),
  image: z.string().optional(),
  instructor: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
});

export const classDataSchema = z.object({
  live: z.array(classItemSchema),
  upcoming: z.array(classItemSchema),
  completed: z.array(classItemSchema),
});

export type ClassItem = z.infer<typeof classItemSchema>;
export type ClassData = z.infer<typeof classDataSchema>;
