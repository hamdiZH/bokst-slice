import React from "react";
import {
  NotificationImg,
  NotificationLink,
  NotificationText,
  NotificationTitle,
  NotificationDetails,
  NotificationDate,
} from "./NotificationBadge.Style";
import MenuItem from "@mui/material/MenuItem";

const NotificationItem = ({ onClick, to, imgSrc, title, details, date }) => {
  return (
    <MenuItem onClick={onClick}>
      <NotificationLink to={to}>
        <NotificationImg src={imgSrc} alt="notification" />
        <NotificationText>
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationDetails>{details}</NotificationDetails>
        </NotificationText>
        <NotificationDate>{date}</NotificationDate>
      </NotificationLink>
    </MenuItem>
  );
};

export default NotificationItem;
