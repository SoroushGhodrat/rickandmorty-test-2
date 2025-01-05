import React, { useCallback } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPage?: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}) => {
  const handleNextPage = useCallback(() => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, hasNextPage, onPageChange]);

  const handlePrevPage = useCallback(() => {
    if (hasPrevPage) {
      onPageChange(Math.max(currentPage - 1, 1));
    }
  }, [currentPage, hasPrevPage, onPageChange]);

  return (
    <nav
      className="mt-10 flex justify-center rounded-md border border-indigo-400 p-3"
      aria-label="Pagination"
    >
      <div className="flex space-x-6">
        <button
          onClick={handlePrevPage}
          disabled={!hasPrevPage}
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          aria-disabled={!hasPrevPage}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          {totalPage && totalPage > 1
            ? `Page ${currentPage} of ${totalPage}`
            : `Page ${currentPage}`}
        </span>
        <button
          onClick={handleNextPage}
          disabled={!hasNextPage}
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          aria-disabled={!hasNextPage}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
