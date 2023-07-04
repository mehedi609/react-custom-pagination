import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoTableRow from './TodoTableRow';
import PaginationComponent from './PaginationComponent';
import usePagination from './usePagination';

const TodoTable = ({ todos }) => {
    const itemsPerPage = 2;
    const pageSize = 2;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const slicedTodos = usePagination(todos, currentPage, itemsPerPage);

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
                totalPages={Math.ceil(todos.length / pageSize)}
                onPageChange={handlePageChange}
                pageSize={pageSize}
            />
        </div>
    );
};

TodoTable.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default TodoTable;
