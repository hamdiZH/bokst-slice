import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexColumn, FlexRow, FlexBox } from "../../App.Style";

export const Side = styled("aside")`
  background-color: ${(props) => props.theme.colors.white};
  width: 260px;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 20px 15px;
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: 992px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;
export const MenuHeader = styled(FlexRow)`
  margin-bottom: 20px;
  justify-content: space-between;
`;
export const MenuLogo = styled.img`
  max-width: 124px;
  height: auto;
  object-fit: cover;
`;

export const MenuClose = styled.img`
  cursor: pointer;
  align-self: center;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;
export const MenuItems = styled(FlexColumn)`
  justify-content: flex-start;
  align-items: flex-start;

  text-transform: capitalize;
`;
export const MenuItem = styled(Link)`
  width: 100%;
  display: flex;

  padding: 12px 15px;
  margin-bottom: 6px;
  border-radius: 5px;
  &:hover {
    background-color: #ffe9e9;
  }
`;
export const ItemName = styled.span`
  color: #5e5873;
  font-size: 15px;
`;
export const ItemIcon = styled.img`
  margin-right: 12px;
`;
export const ActiveItem = styled(MenuItem)`
  background: transparent linear-gradient(90deg, #ad2121 0%, #cb2626 100%) 0% 0%
    no-repeat padding-box;
  ${ItemName} {
    color: ${(props) => props.theme.colors.white};
  }
  ${ItemIcon} {
    filter: invert(100%) sepia(95%) saturate(0%) hue-rotate(171deg)
      brightness(106%) contrast(101%);
  }
`;

export const MenuTitle = styled.span`
  font-size: 12px;
  color: #b9b9c3;
  margin: 30px 0 6px 15px;
`;
export const SupportLink = styled.a`
  margin-top: auto;
  margin-left: 15px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.red};
`;
export const MainContentSide = styled("main")`
  height: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  width: calc(100% - 260px);
  margin-left: auto;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const MainContent = styled(FlexColumn)`
  padding: 25px 28px;
  align-items: flex-start;
`;

export const HeaderTitle = styled.h2`
  color: #16181e;
  font-size: 20px;
  text-transform: capitalize;
`;

export const EventCardsWrap = styled(FlexBox)`
  justify-content: flex-start;
  align-items: start;
  flex-wrap: wrap;
`;

export const ScrollContent = styled.div`
  height: calc(100vh - 165px);
  overflow-x: hidden;
  overflow-y: auto;
`;
