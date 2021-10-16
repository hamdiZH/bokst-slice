import styled from "styled-components";
import { FlexBox } from "../../../../App.Style";

export const EditWrapper = styled(FlexBox)`
  width: 100%;
  height: 38px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 9px 13px;
  border-radius: 6px;
  border: 1px solid #d8d6de;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const EditLink = styled.a`
  color: ${(props) => props.theme.colors.red};
  text-decoration: underline;
  cursor: pointer;
`;
