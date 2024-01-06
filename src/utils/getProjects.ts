import { getCollection } from "astro:content";

export default async function () {
const projects = await getCollection("projects");
    return projects.sort((a, b) => b.data.dateStarted.getTime() - a.data.dateStarted.getTime());
}