import PropTypes from 'prop-types';

import ContactsLI from './ConstactsLI';
import { nanoid } from 'nanoid';

import { ContactsListContainer } from './ContactsList.styled';

export default function ContactsList({ contacts, onDelete }) {
  return (
    <>
      <ContactsListContainer>
        {contacts.map(item => {
          return (
            <ContactsLI
              key={nanoid()}
              name={item.name}
              number={item.number}
              onDelete={() => onDelete(item.id)}
            />
          );
        })}
      </ContactsListContainer>
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
