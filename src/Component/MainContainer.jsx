import React from "react";
import Header from "./Header";
const MainContainer = ({ children }) => {
  return (
    <>
      {/* <InitialTransition/> */}
      <Header />
      {children}
    </>
  );
};

export default MainContainer;
