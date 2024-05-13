import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        gap: 3,
        alignItems: "flex-start",
        marginLeft: 0,
      }}
    >
      {isLoggedIn ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            marginLeft: 0,
          }}
        >
          <NavLink className={css["to-home"]} to="/">
            <Typography color="white">Home</Typography>
          </NavLink>
          <NavLink to="/contacts" className={css["to-contact"]}>
            <Typography color="white"> Contacts</Typography>
          </NavLink>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            marginLeft: 0,
          }}
        >
          <NavLink className={css["to-home"]} to="/">
            <Typography sx={{ color: "white" }}>Home</Typography>
          </NavLink>
        </Box>
      )}
    </Container>
  );
};
