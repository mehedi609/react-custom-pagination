import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Pagination } from 'react-bootstrap';
import { usePagination, DOTS } from './custom-hooks/usePagination';

const CustomPagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
}) => {
    const { paginationRange } = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const handlePageChange = (page) => {
        onPageChange(page);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <Pagination
            className={classNames(
                'justify-content-center',
                'align-items-center',
            )}
        >
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            />
            {paginationRange.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return <Pagination.Ellipsis key={pageNumber} />;
                }

                return (
                    <Pagination.Item
                        key={pageNumber}
                        active={pageNumber === currentPage}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Pagination.Item>
                );
            })}
            <Pagination.Next
                disabled={currentPage === lastPage}
                onClick={() => handlePageChange(currentPage + 1)}
            />
        </Pagination>
    );
};

CustomPagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    totalCount: PropTypes.number.isRequired,
    siblingCount: PropTypes.number,
    currentPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
};

export default CustomPagination;
