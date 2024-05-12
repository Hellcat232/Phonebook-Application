import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
// import { SearchBox } from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <main className={css["main-contacts"]}>
        <ContactForm />
        {/* <SearchBox /> */}
        <ContactList />
      </main>
    </>
  );
};

export default ContactsPage;
