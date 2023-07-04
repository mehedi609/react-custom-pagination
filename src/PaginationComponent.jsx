import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({
    currentPage,
    totalPages,
    onPageChange,
    pageSize,
}) => {
    const renderPaginationItems = () => {
        const paginationItems = [];

        const startPage = Math.max(1, currentPage - 4);
        const endPage = Math.min(startPage + 9, totalPages);

        paginationItems.push(
            <Pagination.First
                key="first"
                disabled={currentPage === 1}
                onClick={() => onPageChange(1)}
            />,
        );

        paginationItems.push(
            <Pagination.Prev
                key="prev"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            />,
        );

        for (let page = startPage; page <= endPage; page++) {
            paginationItems.push(
                <Pagination.Item
                    key={page}
                    active={page === currentPage}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </Pagination.Item>,
            );
        }

        paginationItems.push(
            <Pagination.Next
                key="next"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            />,
        );

        paginationItems.push(
            <Pagination.Last
                key="last"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(totalPages)}
            />,
        );

        return paginationItems;
    };

    return <Pagination>{renderPaginationItems()}</Pagination>;
};

PaginationComponent.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
};

export default PaginationComponent;
