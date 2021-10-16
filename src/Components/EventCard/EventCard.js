import React from "react";
import {
  EventCardWrap,
  EventImg,
  EventImgWrap,
  EventName,
  EventDesc,
  EventContent,
  EventFooter,
  EventReactions,
  EventHeart,
  EventComment,
  ReactionNumber,
  EventLink,
} from "./EventCard.Style";

import HeartIcon from "../../Assets/Images/heart.svg";
import CommentIcon from "../../Assets/Images/chat.svg";

const EventCard = ({ img, name, desc, link, likes, comments }) => {
  return (
    <EventCardWrap to={link}>
      <EventContent>
        <EventImgWrap>
          <EventImg src={img} alt={"event"} />
        </EventImgWrap>
        <EventName>{name}</EventName>
        <EventDesc>{desc}</EventDesc>
      </EventContent>
      <EventFooter>
        <EventLink to={link}>View Event</EventLink>
        <EventReactions>
          <EventHeart src={HeartIcon}></EventHeart>
          <ReactionNumber>{likes}</ReactionNumber>
          <EventComment src={CommentIcon}></EventComment>
          <ReactionNumber>{comments}</ReactionNumber>
        </EventReactions>
      </EventFooter>
    </EventCardWrap>
  );
};

export default EventCard;
