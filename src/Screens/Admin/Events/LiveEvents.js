import React from "react";
import { EventCardsWrap } from "../../../Components/Layout/Layout.Style";
import EventCard from "../../../Components/EventCard/EventCard";
import EventImg from "../../../Assets/Images/event.png";

const LiveEvents = () => {
  return (
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
  );
};

export default LiveEvents;
