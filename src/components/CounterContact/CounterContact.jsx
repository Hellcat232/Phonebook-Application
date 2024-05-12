import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import {
  selectFilteredContacts,
  selectContacts,
} from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";

export const CounterContact = () => {
  const counter = useSelector(selectContacts);

  return (
    <Badge
      badgeContent={counter.length}
      color="secondary"
      sx={{ marginRight: 5 }}
    >
      <MailIcon color="inherit" />
    </Badge>
  );
};
