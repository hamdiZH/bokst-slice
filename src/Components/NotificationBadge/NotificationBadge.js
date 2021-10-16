import React from "react";
import Badge from "@mui/material/Badge";

import NotificationImg from "../../Assets/Images/Notification.svg";
import {
  NotificationIcon,
  NotificationInfo,
  NotificationsDropdown,
} from "./NotificationBadge.Style";
import NotificationItem from "./NotificationItem";
import NotificationImgSrc from "../../Assets/Images/user.jpg";
const NotificationBadge = ({ badgeContent }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NotificationInfo>
      <Badge
        badgeContent={badgeContent}
        max={99}
        color={"error"}
        id="notification-button"
        aria-controls="notification-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <NotificationIcon src={NotificationImg} />
      </Badge>

      <NotificationsDropdown>
        <h5>test</h5>
      </NotificationsDropdown>

      <NotificationsDropdown
        id="notification-menu"
        aria-labelledby="notification-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "none",
            border: "1px solid #ECECEC",
            borderRadius: "10px",
          },
        }}
      >
        <NotificationItem
          onClick={handleClose}
          to="/notification-details"
          imgSrc={NotificationImgSrc}
          title={"Ticket cancellation request"}
          details={"Lorem ipsum dolor sit amet Lorem Lorem"}
          date={"15:26"}
        />
        <NotificationItem
          onClick={handleClose}
          to="/notification-details"
          imgSrc={NotificationImgSrc}
          title={"Ticket cancellation request"}
          details={"Lorem ipsum dolor sit amet Lorem Lorem"}
          date={"15:26"}
        />
        <NotificationItem
          onClick={handleClose}
          to="/notification-details"
          imgSrc={NotificationImgSrc}
          title={"Ticket cancellation request"}
          details={"Lorem ipsum dolor sit amet Lorem Lorem"}
          date={"15:26"}
        />
        <NotificationItem
          onClick={handleClose}
          to="/notification-details"
          imgSrc={NotificationImgSrc}
          title={"Ticket cancellation request"}
          details={"Lorem ipsum dolor sit amet Lorem Lorem"}
          date={"15:26"}
        />
      </NotificationsDropdown>
    </NotificationInfo>
  );
};

export default NotificationBadge;
