import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        name: z.string(),
        hub: z.string(),
        link: z.string(),
        repository: z.string(),
        dateStarted: z.string().transform((value) => new Date(value)),
        img: image(),
        tags: z.array(z.string())
    })
})

export const collections = {
    projects
}