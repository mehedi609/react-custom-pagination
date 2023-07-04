import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoTableRow from './TodoTableRow';
import CustomPagination from './CustomPagination';
import { usePagination } from './custom-hooks/usePagination';
// import usePagination from './usePagination';

const TodoTable = ({ todos, pageSize = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * pageSize;
    //     const lastPageIndex = firstPageIndex + pageSize;
    //     return todos.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage, todos, pageSize]);

    const { currentTableData } = usePagination({
        totalCount: todos.length,
        pageSize,
        currentPage,
        data: todos,
    });

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Todo</th>
                        <th>Completed</th>
                        <th>User ID</th>
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
                totalCount={todos.length}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
};

TodoTable.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default TodoTable;
