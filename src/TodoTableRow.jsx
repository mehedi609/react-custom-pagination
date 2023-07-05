import React from 'react';
import PropTypes from 'prop-types';

const TodoTableRow = ({ item }) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    );
};

// TodoTableRow.propTypes = {
//     item: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         todo: PropTypes.string.isRequired,
//         completed: PropTypes.bool.isRequired,
//         userId: PropTypes.number.isRequired,
//     }).isRequired,
// };

export default TodoTableRow;
