import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import { getClient } from "@/lib/apollo-server";
import { getBlogPosts } from "@/query/schema";
import { env } from "@/lib/env";
import BlogPagination from "@/components/blogs/BlogPagination";

const BlogSection: FC = async () => {
  const client = getClient();
  const { data } = await client.query({
    query: getBlogPosts,
    context: { fetchOptions: { next: { revalidate: 5 } } },
  });

  return (
    <section className="mt-5 flex h-[1900px] items-center justify-center px-7 md:h-[1060px]">
      <div className="grid gap-6">
        {data.blogs.data.map((blog: any) => (
          <BlogCard
            key={blog.id}
            tags={blog?.attributes?.Tags}
            createdAt={blog?.attributes?.createdAt}
            imgUrl={env.STRAPI_URL_ENDPOINT.concat(
              blog?.attributes?.Picture?.data?.attributes?.url,
            )}
            alt={blog?.attributes?.Picture?.data?.attributes?.alternativeText}
            title={blog?.attributes?.Title}
          />
        ))}
        <BlogPagination pagination={data?.blogs?.meta?.pagination?.pageCount} />
      </div>
    </section>
  );
};

export default BlogSection;
