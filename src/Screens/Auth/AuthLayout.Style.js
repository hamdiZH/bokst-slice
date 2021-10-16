import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexColumn } from "../../App.Style";


export const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 724px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0 auto;
  min-height: 100vh;
`;

export const LogoImg = styled.img`
  max-width: 243px;
  height: auto;
  object-fit: cover;
`;

export const HeadingTxt = styled.h2`
  color: ${(props) => props.theme.colors.headingTxtColor};
  font-size: 20px;
  text-align: center;
  margin: 16px 0;
`;

export const ItemWrap = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  &:nth-child(odd) {
    margin-right: 30px;
    width: 332px;
  }
  &:nth-child(even) {
    width: 362px;
  }
  @media (max-width: 768px) {
    &:nth-child(odd),
    &:nth-child(even) {
      width: 100%;
      margin-right: 0;
    }
  }
`;
export const ItemLoginWrap = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  width: 362px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const QAccount = styled.p`
  text-decoration: underline;
  margin-bottom: 16px;
`;
export const Or = styled.span`
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.formTxtColor};
`;

export const AccountChoice = styled.span`
  color: ${(props) => props.theme.colors.darkRed};
`;

export const ForgetLink = styled(Link)`
  color: ${(props) => props.theme.colors.formTxtColor};
`;
