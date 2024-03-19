"use client";

import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../ui/pagination";

const BlogPagination: FC<{ pageCount: number }> = ({ pageCount }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";

  const startPage = Math.floor((+page - 1) / 5) * 5 + 1;
  let endPage = startPage + 4;

  endPage = endPage > pageCount ? pageCount : endPage;

  return (
    <Pagination>
      <PaginationContent>
        {startPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`?page=${startPage - 1}`} />
          </PaginationItem>
        )}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map((pageNum) => (
          <PaginationItem key={pageNum}>
            <PaginationLink
              href={`?page=${pageNum}`}
              isActive={pageNum === +page}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < pageCount && (
          <PaginationItem>
            <PaginationNext href={`?page=${endPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
