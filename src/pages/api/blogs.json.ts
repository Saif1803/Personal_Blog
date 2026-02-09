import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
    const posts = await getCollection("blog");

    const formatted = posts.map((post) => ({
        title: post.data.title,
        slug: post.id,
        date: post.data.pubDate,
    }));

    return new Response(JSON.stringify(formatted), {
        headers: { "Content-Type": "application/json" },
    });
};
