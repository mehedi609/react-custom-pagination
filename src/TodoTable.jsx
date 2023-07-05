import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoTableRow from './TodoTableRow';
import CustomPagination from './CustomPagination';
// import { usePagination } from './custom-hooks/usePagination';
// import usePagination from './usePagination';
import data from './data.json';
let PageSize = 10;
const TodoTable = ({ todos }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * pageSize;
    //     const lastPageIndex = firstPageIndex + pageSize;
    //     return todos.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage, todos, pageSize]);

    // const { currentTableData } = usePagination({
    //     totalCount: todos.length,
    //     pageSize,
    //     currentPage,
    //     data: todos,
    // });

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTableData.map((todo) => (
                        <TodoTableRow key={todo.id} item={todo} />
                    ))}
                </tbody>
            </table>
            <CustomPagination
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                siblingCount={6}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
};

// TodoTable.propTypes = {
//     todos: PropTypes.array.isRequired,
// };

export default TodoTable;
