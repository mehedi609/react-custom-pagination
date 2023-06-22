import React from 'react';
import PropTypes from 'prop-types';

const TodoTableRow = ({ item }) => {
    const { id, todo, completed, userId } = item;

    return (
        <tr>
            <td>{id}</td>
            <td>{todo}</td>
            <td>{completed ? 'Yes' : 'No'}</td>
            <td>{userId}</td>
        </tr>
    );
};

TodoTableRow.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        todo: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        userId: PropTypes.number.isRequired,
    }).isRequired,
};

export default TodoTableRow;
