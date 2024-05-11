import { Contact } from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import { useSelector } from "react-redux";

export const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector(selectNameFilter);
  // console.log(filters);

  // const filteredContacts = contacts.filter((contact) => {
  //   return (
  //     contact.name.toLowerCase().includes(filters.toLowerCase()) ||
  //     contact.number.includes(filters)
  //   );
  // });

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts}>
      {filteredContacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
};

// export default ContactList;
