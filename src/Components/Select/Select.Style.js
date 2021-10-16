import styled from "styled-components";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export const StyledSelect = styled(Select)`
  width: ${(props) => (props.width ? props.width : "332px")};
  height: 38px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.formTxtColor};
  background-color: ${(props) => props.theme.colors.white};
  padding: 9px 13px 11px;
  border-radius: 6px;
  border: none;
  outline: 1px solid #d8d6de;
  @media (max-width: 768px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &:last-child {
    border-bottom: 0;
  }
`;

export const StyledFormControl = styled(FormControl)`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
