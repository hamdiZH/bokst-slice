import styled from "styled-components";

import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { FlexColumn } from "../../App.Style";

export const NotificationInfo = styled("div")``;
export const NotificationIcon = styled.img``;

export const NotificationsDropdown = styled(Menu)``;

export const NotificationLink = styled(Link)`
  display: flex;
  max-width: 326px;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #ececec;
`;

export const NotificationImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 3px 15px #00000029;
  margin-right: 10px;
`;
export const NotificationText = styled(FlexColumn)`
  align-items: start;
  justify-content: flex-start;
`;
export const NotificationTitle = styled.span`
  color: #666666;
  font-weight: 600;
`;

export const NotificationDetails = styled.p`
  color: #666666;
  font-size: 13px;
  display: inline-block;
  width: 240px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;

export const NotificationDate = styled.span`
  color: #999999;
  font-size: 8px;
  align-self: center;
  margin-left: 18px;
`;
