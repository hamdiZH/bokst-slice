import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, hsl(0, 68%, 40%), hsl(0, 68%, 47%));
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  width: ${(props) => props.width};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  height: 38px;
  border: ${(props) => (props.border ? props.border : "none")};
  transition: color 0.5s ease-in-out;
  cursor: pointer;
  

  &:hover {
    background: transparent;
    border: ${(props) => ("none" ? "1px solid #AD2121" : "none")};
    color: ${(props) => props.theme.colors.darkRed};
  }
`;
