import styled from "styled-components";
import { FlexBox, FlexRow } from "../../../App.Style";

export const TopNavbar = styled.nav`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: ${(props) => props.theme.colors.white};
  padding: 12px 43px 12px 58px;
  @media (max-width: 992px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const MobileMenuWrap = styled(FlexBox)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;
export const MobileMenuIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SearchBox = styled(FlexRow)`
  background: ${(props) => props.theme.colors.white};
  max-width: 450px;
  height: 38px;
  padding: 10px 0px 10px 13px;
  border: 1px solid #d8d6de;
  border-radius: 6px;
  display: none;
  @media (min-width: 1200px) {
    max-width: 570px;
  }
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const SearchInputWrap = styled(FlexRow)`
  height: 38px;
  justify-content: flex-start;
  @media (min-width: 1200px) {
    width: 530px;
  }
`;
export const SearchInput = styled.input`
  outline: 0;
  max-width: 445px;
  width: 100%;
  border: none;
  border-right: 1px solid #d8d6de;
  ::placeholder {
    color: ${(props) => props.theme.colors.formTxtColor};
  }
`;
export const SearchIcon = styled.img`
  margin-right: 8px;
`;

// Mobile Search
export const MobileSearchIcon = styled.img`
  margin-right: auto;
  width: 25px;
  height: 25px;
  object-fit: cover;
  margin-left: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileSearchWrap = styled(FlexBox)`
  width: 80%;
  height: 50px;
  background-color: red;
  position: absolute;
  top: 100%;
  left: 5%;
  z-index: 3;
  ::after {
    content: "";
    display: inline-block;

    position: absolute;
    top: -20%;
    left: 3.5%;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid red;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
export const UserInfo = styled(FlexBox)`
  width: auto;
  min-width: 160px;
`;

export const UserInformation = styled(FlexBox)`
  /* width: auto; */
  margin-left: 16px;
  justify-content: flex-end;
`;
export const UserImgWrap = styled.div`
  /* width: 38px;
  height: 38px; */
  position: relative;
`;
export const UserImg = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  position: relative;
  border-radius: 50%;
  margin-left: 16px;
`;

export const StatusCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #28c76f;
  border: 2px solid white;
  position: absolute;
  bottom: 2px;
  right: 0;
`;

export const UserName = styled.h5`
  text-transform: capitalize;
  color: #6e6b7b;
  font-size: 14px;
`;
export const UserRole = styled.span`
  font-size: 12px;
  color: #b9b9c3;
  text-transform: capitalize;
`;
