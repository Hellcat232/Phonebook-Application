import HomeIcon from "@mui/icons-material/Home";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink className={css["to-home"]} to="/">
        <Typography>Home</Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css["to-contact"]}>
          <Typography> Contacts</Typography>
        </NavLink>
      )}
    </>
  );
};
