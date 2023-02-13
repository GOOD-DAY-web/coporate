import React from "react";
import Link from "next/link";

export const StylistPagination = ({
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
          <Link href={`/stylist/${prevPage}`}>
            <ul>
              <li>&lt; Previous</li>
            </ul>
          </Link>
        )}
        {currentPageNumber !== maxPageNumber && (
          <Link href={`/stylist/${nextPage}`}>
            <ul>
              <li className="">Next &gt;</li>
            </ul>
          </Link>
        )}
      </div>
    </>
  );
};
