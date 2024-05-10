import { logout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onSubmit={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </>
  );
};
