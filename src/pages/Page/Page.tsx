import React, { FC } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Page: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
