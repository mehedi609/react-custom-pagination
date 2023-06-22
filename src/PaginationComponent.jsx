import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({
    currentPage,
    totalPages,
    onPageChange,
    startPage,
    endPage,
}) => {
    const handleClick = (pageNumber) => {
        if (pageNumber !== currentPage) {
            onPageChange(pageNumber);
        }
    };

    const renderPaginationItems = () => {
        const paginationItems = [];

        paginationItems.push(
            <Pagination.First
                key="first"
                disabled={currentPage === 1}
                onClick={() => handleClick(1)}
            />,
        );

        paginationItems.push(
            <Pagination.Prev
                key="prev"
                disabled={currentPage === 1}
                onClick={() => handleClick(currentPage - 1)}
            />,
        );

        for (let i = startPage; i <= endPage; i++) {
            paginationItems.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </Pagination.Item>,
            );
        }

        paginationItems.push(
            <Pagination.Next
                key="next"
                disabled={currentPage === totalPages}
                onClick={() => handleClick(currentPage + 1)}
            />,
        );

        paginationItems.push(
            <Pagination.Last
                key="last"
                disabled={currentPage === totalPages}
                onClick={() => handleClick(totalPages)}
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
    startPage: PropTypes.number.isRequired,
    endPage: PropTypes.number.isRequired,
};

export default PaginationComponent;
