import React, { FC } from "react";
import BlogTag from "@/components/blogs/BlogTag";
import ImgPlaceholder from "@/components/blogs/ImgPlaceholder";
import dateFormatter from "@/utils/dateFormatter";
import Image from "next/image";

type TagsData = {
  name: string;
};

type BlogCardProps = {
  tags: TagsData[];
  createdAt: string;
  imgUrl: string;
  alt: string;
  title: string;
};

const BlogCard: FC<BlogCardProps> = ({
  tags,
  createdAt,
  imgUrl,
  alt,
  title,
}) => (
  <div className="grid h-fit w-fit">
    <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-16">
      <div className="mt-4 max-w-[500px] space-y-2 md:space-y-4">
        <div className="flex flex-col space-y-4 md:flex-row md:gap-4 md:space-y-0">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <BlogTag key={index} tag={tag?.name.toUpperCase()} />
            ))}
          </div>
          <p className="text-tiny text-[#232E52] dark:text-white">
            {dateFormatter(createdAt).toUpperCase()}
          </p>
        </div>
        <div className="flex items-center">
          <h1 className="line-clamp-2 text-2xl font-bold text-[#232E52] dark:text-white">
            {title}
          </h1>
        </div>
        <p className="line-clamp-3 text-justify text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </p>
      </div>
      {imgUrl && alt ? (
        <Image
          src={imgUrl}
          alt={alt}
          width={320}
          height={180}
          className="order-first h-[180px] w-[320px] object-cover md:order-last"
        />
      ) : (
        <ImgPlaceholder />
      )}
    </div>
  </div>
);

export default BlogCard;
