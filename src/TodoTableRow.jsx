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

TodoTableRow.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default TodoTableRow;
