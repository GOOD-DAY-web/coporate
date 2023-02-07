import Link from "next/link";

export const Pagination = ({
  maxPageNumber,
  currentPageNumber,
}: number | any) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <div className="">
      {currentPageNumber !== 1 && (
        <Link href={`/blogs/page/${prevPage}`}>
          <a>&lt; Previous</a>
        </Link>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link href={`/blogs/page/${nextPage}`}>
          <a className="ml-4">Next &gt;</a>
        </Link>
      )}
    </div>
  );
};
