import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../redux/contacts/slice";
import { filterReducer } from "../redux/filters/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    auth: authReducer,
  },
});
