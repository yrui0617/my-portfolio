import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://my-portfolio-yrui.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://my-portfolio-yrui.vercel.app/#about",
      lastModified: new Date(),
    },
    {
      url: "https://my-portfolio-yrui.vercel.app/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://my-portfolio-yrui.vercel.app/#contact",
      lastModified: new Date(),
    },
  ];
}
