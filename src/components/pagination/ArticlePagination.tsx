import React from "react";
import Link from "next/link";

export const ArticlePagination = ({
  maxPageNumber,
  currentPageNumber,
}: any) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <>
      <div className="">
        {currentPageNumber !== 1 && (
          <Link href={`/pages/article/${prevPage}`}>
            <a>&lt; Previous</a>
          </Link>
        )}
        {currentPageNumber !== maxPageNumber && (
          <Link href={`/pages/article/${nextPage}`}>
            <a className="">Next &gt;</a>
          </Link>
        )}
      </div>
    </>
  );
};
