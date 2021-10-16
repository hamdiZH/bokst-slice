import styled from "styled-components";
import { FlexBox } from "../../App.Style";

export const RadioBtnWrap = styled(FlexBox)`
  align-items: center;
  height: 38px;
  color: ${(props) => props.theme.colors.formTxtColor};
`;
export const RadioBtnLabel = styled.span`
  flex-basis: 50%;
  @media (max-width: 768px) {
    margin-left: 3%;
  }
`;
export const RadioInput = styled.input`
  margin-right: 8px;
  border: 1px solid #d8d6de;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 2px;

  background-clip: content-box;
  background-color: transparent;
  border-radius: 50%;

  &:checked {
    background-color: gray;
  }
`;
