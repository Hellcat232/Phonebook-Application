import { AppBar } from "../AppBar/AppBar";
import { Suspense } from "react";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense>{children}</Suspense>
    </>
  );
};
