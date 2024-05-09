import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { refreshUser } from "../../redux/auth/operations.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RegistrationForm } from "../RegistarationForm/RegistrationForm.jsx";

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contactsArray = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {/* {isLoading && <p>Progress loading...</p>} */}
      {/* {error && <p>Sorry! Something went wrong...{error}</p>} */}
      {/* {contactsArray.length > 0 && <ContactList />} */}
      <RegistrationForm />
    </div>
  );
};

export default App;
