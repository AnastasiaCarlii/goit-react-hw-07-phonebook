import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.formContainer}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};
