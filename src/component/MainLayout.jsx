import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Sider_Bar from "./Sider_Bar";

const MainLayout = (props) => {
  return (
    <div>
      <Navbar />
      <Sider_Bar />
      <hr />
      {props.children}
      <hr />
      <Footer />
    </div>
  );
};

export default MainLayout;
