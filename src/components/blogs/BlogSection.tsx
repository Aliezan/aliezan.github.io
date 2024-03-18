import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";

const BlogSection: FC = async () => {
  const client = getClient();
  const { data } = await client.query({ query: getBlogPosts });

  return (
    <section className="mt-5 flex items-center justify-center px-7">
      <div className="grid gap-6">
        {data.blogs.data.map((blog: any) => (
          <BlogCard
            key={blog.id}
            tags={blog?.attributes?.Tags}
            createdAt={blog?.attributes?.createdAt}
            imgUrl={blog?.attributes?.Picture?.data?.attributes?.url}
            alt={blog?.attributes?.Picture?.data?.attributes?.caption}
            title={blog?.attributes?.Title}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
