import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useSelector } from "react-redux";

import {
  EventCardsWrap,
  HeaderTitle,
} from "../../../Components/Layout/Layout.Style";
import Btn from "../../../Components/Button/Btn";
import EventCard from "../../../Components/EventCard/EventCard";

import { FlexRow } from "../../../App.Style";

import EventImg from "../../../Assets/Images/event.png";
import ApexChart from "./Components/ApexChart/ApexChart";

const Dashboard = (props) => {
  const lightTheme = useContext(ThemeContext);
  const state = useSelector((store) => store);
  return (
    <>
      <FlexRow style={{ width: "100%", height: "300px" }}>
        <ApexChart />
      </FlexRow>
      <FlexRow justifyContent="space-between" style={{ marginBottom: "16px" }}>
        <HeaderTitle>Latest Events</HeaderTitle>
        <Btn
          text="Create Event"
          link="/create-event"
          width="170px"
          borderRadius="21px"
        />
      </FlexRow>
      <EventCardsWrap>
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />{" "}
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />{" "}
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />{" "}
        <EventCard
          img={EventImg}
          name={"Event Name"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          }
          link={"/event-details"}
          likes={"12"}
          comments={"6"}
        />
      </EventCardsWrap>
    </>
  );
};

export default Dashboard;
