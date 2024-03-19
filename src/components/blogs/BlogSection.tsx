import React, { FC } from "react";
import BlogCard from "@/components/blogs/BlogCard";
import { env } from "@/lib/env";
import BlogPagination from "@/components/blogs/BlogPagination";
import { BlogsQuery } from "@/__generated__/graphql";

const BlogSection: FC<{ data: BlogsQuery }> = ({ data }) => (
  <section className="mt-5 flex h-[1900px] items-center justify-center px-7 md:h-[1060px]">
    <div className="grid gap-6">
      {data?.blogs?.data?.map((blog) => (
        <BlogCard
          key={blog.id}
          tags={blog?.attributes?.Tags}
          createdAt={blog?.attributes?.createdAt ?? "NO DATE"}
          imgUrl={env.STRAPI_URL_ENDPOINT.concat(
            blog?.attributes?.Picture?.data?.attributes?.url!,
          )}
          alt={
            blog?.attributes?.Picture?.data?.attributes?.alternativeText ??
            "NO ALT PROVIDED"
          }
          title={blog?.attributes?.Title ?? "UNTTILED"}
        />
      ))}
      <BlogPagination
        pageCount={data?.blogs?.meta?.pagination?.pageCount ?? 1}
      />
    </div>
  </section>
);
export default BlogSection;
