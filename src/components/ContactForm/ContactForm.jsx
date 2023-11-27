import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';

import css from './ContactForm.module.css';
import { selectContacts } from 'redux/selectors';

import { fetchAddContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [data, setData] = useState({
    name: '',
    phone: '',
  });
  const { name, phone } = data;

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.phone === phone
      )
    ) {
      alert(`${name} or ${phone} is already in your contacts`);
      setData({ name: '', phone: '' });
      return;
    }

    const newContact = { ...data };

    dispatch(fetchAddContact(newContact));
    setData({ name: '', phone: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          className={css.formInput}
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Number
        <input
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          className={css.formInput}
          autoComplete="off"
          type="text"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>

      <button className={css.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
