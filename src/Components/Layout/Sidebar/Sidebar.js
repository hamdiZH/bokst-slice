import React from "react";
import {
  MenuItem,
  MenuLogo,
  MenuTitle,
  MenuItems,
  ItemName,
  ItemIcon,
  Side,
  SupportLink,
  ActiveItem,
  MenuClose,
  MenuHeader,
} from "../Layout.Style";
import DashboardIcon from "../../../Assets/Images/dashboard.svg";
import LogoImage from "../../../Assets/Images/bokst-logo.png";
import MenuCloseImg from "../../../Assets/Images/close-cross.svg";
import EventIcon from "../../../Assets/Images/event.svg";
import SettingIcon from "../../../Assets/Images/settings.svg";
import ReportIcon from "../../../Assets/Images/report.svg";
import TicketIcon from "../../../Assets/Images/ticket.svg";

const Sidebar = ({ open, setOpen }) => {
  return (
    <Side open={open}>
      <MenuHeader>
        <MenuLogo src={LogoImage} />
        <MenuClose
          open={open}
          onClick={() => setOpen(!open)}
          src={MenuCloseImg}
          alt="close"
        />
      </MenuHeader>
      <MenuItems>
        <ActiveItem to="/">
          <ItemIcon src={DashboardIcon} alt="dashboard" />
          <ItemName>dashboard</ItemName>
        </ActiveItem>
        <MenuItem to="/">
          <ItemIcon src={EventIcon} alt="events" />
          <ItemName>events</ItemName>
        </MenuItem>
        <MenuTitle>main</MenuTitle>
        <MenuItem to="/">
          <ItemIcon src={TicketIcon} alt="tickets" />
          <ItemName>tickets</ItemName>
        </MenuItem>
        <MenuItem to="/">
          <ItemIcon src={ReportIcon} alt="reports" />
          <ItemName>reports</ItemName>
        </MenuItem>
        <MenuTitle>admin control</MenuTitle>
        <MenuItem to="/">
          <ItemIcon src={SettingIcon} alt="settings" />
          <ItemName>settings</ItemName>
        </MenuItem>
      </MenuItems>
      <SupportLink>Need Support ?</SupportLink>
    </Side>
  );
};

export default Sidebar;
