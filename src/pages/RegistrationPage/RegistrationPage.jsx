import { RegistrationForm } from "../../components/RegistarationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const RegistrationPage = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <main>
      <RegistrationForm />
    </main>
  );
};

export default RegistrationPage;
