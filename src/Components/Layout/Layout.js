import React, { useState } from "react";
import { FlexBox, MainContainer } from "../../App.Style";
import { MainContent, MainContentSide } from "./Layout.Style";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <MainContainer>
      <FlexBox justifyContent="flex-start">
        <Sidebar open={open} setOpen={setOpen} />
        <MainContentSide>
          <Navbar open={open} setOpen={setOpen} />
          <MainContent>{children}</MainContent>
        </MainContentSide>
      </FlexBox>
    </MainContainer>
  );
};

export default Layout;
