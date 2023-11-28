import React from "react";
import styles from "./Layout.module.css";
import MainHeader from "./MainHeader";

function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}

export default Layout;
