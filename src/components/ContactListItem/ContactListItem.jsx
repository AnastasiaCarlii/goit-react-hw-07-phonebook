import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';

import { fetchDeleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(fetchDeleteContact(id));

  return (
    <li className={css.listItem}>
      <span className={css.contactItem}>
        {name}:{number}
      </span>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};
