import React from "react";
import {
  TopNavbar,
  MobileMenuWrap,
  MobileMenuIcon,
  SearchBox,
  SearchInput,
  SearchInputWrap,
  SearchIcon,
  MobileSearchIcon,
  MobileSearchWrap,
  UserInfo,
  UserInformation,
  UserImgWrap,
  UserImg,
  StatusCircle,
  UserName,
  UserRole,
} from "./Navbar.Style";

import SearchIconImg from "../../../Assets/Images/search.svg";
import SelectOptions from "../../Select/SelectOptions";

import NotificationBadge from "../../NotificationBadge/NotificationBadge";
import { FlexColumn } from "../../../App.Style";
import UserImage from "../../../Assets/Images/user.jpg";
import MobileMenu from "../../../Assets/Images/mobile-menu.png";
import MobileSearch from "../../../Assets/Images/mobile-search.svg";

const Navbar = ({ open, setOpen }) => {
  const SearchOptions = [
    { key: " Fighter", value: "" },

    { key: "Fighter", value: "fighter" },
    { key: "Coach", value: "coach" },
    { key: "Promoter", value: "promoter" },
  ];

  return (
    <TopNavbar>
      <MobileMenuWrap>
        <MobileMenuIcon
          src={MobileMenu}
          alt="mobileMenu"
          open={open}
          onClick={() => setOpen(!open)}
        />
      </MobileMenuWrap>
      {/* Search for Tablet/Mobile */}
      <MobileSearchIcon src={MobileSearch} alt="Search" />

      <MobileSearchWrap>
        <SearchBox style={{ display: "flex" }}>
          <SearchInputWrap>
            <SearchIcon src={SearchIconImg} />
            <SearchInput
              name="search"
              type="text"
              placeholder="Search"
            ></SearchInput>
          </SearchInputWrap>
          <SelectOptions
            name={SearchOptions}
            options={SearchOptions}
            width={"100%"}
          />
        </SearchBox>
      </MobileSearchWrap>
      {/* Search for rest screens */}

      <SearchBox>
        <SearchInputWrap>
          <SearchIcon src={SearchIconImg} />
          <SearchInput
            name="search"
            type="text"
            placeholder="Search"
          ></SearchInput>
        </SearchInputWrap>
        <SelectOptions
          name={SearchOptions}
          options={SearchOptions}
          width={"100%"}
        />
      </SearchBox>
      <UserInfo>
        <NotificationBadge badgeContent={4} />
        <UserInformation>
          <FlexColumn style={{ alignItems: "end" }}>
            <UserName>John Doe</UserName>
            <UserRole>admin</UserRole>
          </FlexColumn>
          <UserImgWrap>
            <UserImg src={UserImage} alt="user" />
            <StatusCircle />
          </UserImgWrap>
        </UserInformation>
      </UserInfo>
    </TopNavbar>
  );
};

export default Navbar;
