import PropTypes from 'prop-types';
import { ListItem, DeleteButton } from './ContactsLI.styled';
export default function ContactsLI({ name, number, onDelete }) {
  return (
    <>
      <ListItem>
        {name}: {number}
        <DeleteButton type="button" onClick={onDelete}>
          Delete
        </DeleteButton>
      </ListItem>
    </>
  );
}

ContactsLI.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
