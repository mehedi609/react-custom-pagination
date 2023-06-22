import React from 'react';
import PropTypes from 'prop-types';
import TodoTableRow from './TodoTableRow';
import PaginationComponent from './PaginationComponent';
import usePagination from './usePagination';

const TodoTable = ({ todos }) => {
    const itemsPerPage = 2;

    const { currentPage, totalPages, handlePageChange, getPaginationRange } =
        usePagination(todos.length, itemsPerPage);

    const { startPage, endPage } = getPaginationRange();

    const slicedTodos = todos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );

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
                    {slicedTodos.map((todo) => (
                        <TodoTableRow key={todo.id} item={todo} />
                    ))}
                </tbody>
            </table>
            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                startPage={startPage}
                endPage={endPage}
            />
        </div>
    );
};

TodoTable.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default TodoTable;
