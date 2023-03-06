import PropTypes from 'prop-types';

import { Filter } from './ContactsFilter.styled';

export default function ContactsFilter({ value, onChange }) {
  return (
    <Filter>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </Filter>
  );
}

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
