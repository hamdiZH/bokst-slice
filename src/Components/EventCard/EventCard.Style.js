import styled from "styled-components";
import { Link } from "react-router-dom";
import { FlexBox, FlexColumn } from "../../App.Style";

export const EventCardWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  max-width: 350px;
  box-shadow: 0px 6px 24px #0000001a;
  border-radius: 10px;
  justify-content: flex-start;
  margin-bottom: 28px;
  margin-right: 14px;
  margin-left: 14px;
  @media (min-width: 1200px) {
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const EventContent = styled(FlexColumn)`
  padding: 20px;
  border-bottom: 1px solid #c9c9c9;
  align-items: start;
`;
export const EventImgWrap = styled(FlexBox)`
  max-width: 315px;
  max-height: 150px;
  margin-bottom: 16px;
`;

export const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventName = styled.h4`
  color: ${(props) => props.theme.colors.secondaryBtnTxtColor};
  font-size: 16px;
  margin-bottom: 6px;
  text-transform: capitalize;
`;
export const EventDesc = styled.p`
  color: #9a9a9a;
`;

export const EventFooter = styled(FlexBox)`
  justify-content: space-between;
  padding: 20px;
`;

export const EventLink = styled(Link)`
  color: ${(props) => props.theme.colors.red};
  text-decoration: underline;
`;

export const EventReactions = styled(FlexBox)`
  width: auto;
`;

export const EventHeart = styled.img`
  margin-right: 6px;
`;

export const EventComment = styled.img`
  margin-right: 6px;
  margin-left: 18px;
`;

export const ReactionNumber = styled.span`
  font-size: 13px;
  color: #6e6b7b;
`;
