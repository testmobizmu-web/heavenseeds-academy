"use client";

import dynamic from "next/dynamic";

const BlogMarquee = dynamic(() => import("./BlogMarquee"), { ssr: false });

export default function BlogMarqueeClient(props: any) {
  return <BlogMarquee {...props} />;
}
