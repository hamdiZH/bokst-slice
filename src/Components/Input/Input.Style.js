import styled from "styled-components";
import { Field } from "formik";

export const FormikInput = styled(Field)`
  height: 38px;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  padding: 9px 13px 11px;
  border-radius: 6px;
  border: 1px solid #d8d6de;
  ::placeholder {
    color: ${(props) => props.theme.colors.formTxtColor};
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;
