import React, { FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

type BlogPaginationProps = {
  pagination: string;
};

const BlogPagination: FC<BlogPaginationProps> = ({ pagination }) => (
  <Pagination>
    <PaginationContent>
      {Array.from({ length: +pagination }).map((_, index) => (
        <PaginationItem key={index}>
          <PaginationLink href="/">{index + 1}</PaginationLink>
        </PaginationItem>
      ))}
    </PaginationContent>
  </Pagination>
);

export default BlogPagination;
