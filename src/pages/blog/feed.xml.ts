import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import siteConfig from "@/config.ts";
import { posts, slugify } from "@/util.ts";

export function GET(context: APIContext) {
  return rss({
    title: siteConfig.blogTitle,
    description: siteConfig.blogDescription,
    // Pinky promise that this is safe
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: slugify(post.data.date, post.slug),
    })),
  });
}
