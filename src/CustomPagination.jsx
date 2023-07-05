import React from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Pagination } from 'react-bootstrap';
import {
    usePagination,
    DOTS,
    LDOTS,
    RDOTS,
} from './custom-hooks/usePagination';

const CustomPagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <Pagination className="pagination-bar">
            <Pagination.Prev
                disabled={currentPage === 1}
                onClick={onPrevious}
            />
            {paginationRange.map((pageNumber) => {
                if (pageNumber === LDOTS || pageNumber === RDOTS) {
                    return <Pagination.Ellipsis key={pageNumber} disabled />;
                }

                return (
                    <Pagination.Item
                        key={pageNumber}
                        active={pageNumber === currentPage}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Pagination.Item>
                );
            })}
            <Pagination.Next
                disabled={currentPage === lastPage}
                onClick={onNext}
            />
        </Pagination>
    );
};

// CustomPagination.propTypes = {
//     onPageChange: PropTypes.func.isRequired,
//     totalCount: PropTypes.number.isRequired,
//     siblingCount: PropTypes.number,
//     currentPage: PropTypes.number.isRequired,
//     pageSize: PropTypes.number.isRequired,
// };

export default CustomPagination;
