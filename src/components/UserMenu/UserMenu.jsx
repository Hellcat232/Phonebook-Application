import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const userName = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <p>Welcome,</p>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </>
  );
};
