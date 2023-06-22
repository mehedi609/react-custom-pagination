import { useState, useEffect } from 'react';

const usePagination = (totalItems, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
    }, [totalItems, itemsPerPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getPaginationRange = () => {
        const startPage = Math.max(1, currentPage - itemsPerPage + 1);
        const endPage = Math.min(startPage + itemsPerPage - 1, totalPages);

        return { startPage, endPage };
    };

    return {
        currentPage,
        totalPages,
        handlePageChange,
        getPaginationRange,
    };
};

export default usePagination;
