import PropTypes from 'prop-types';

const List = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}: {number}</p>
                <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </li>))}
    </ul>
);

List.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        })
    ),
};

export default List;
