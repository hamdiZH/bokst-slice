import styled from "styled-components";
import ModalUnstyled from "@mui/core/ModalUnstyled";

export const MainContainer = styled("main")`
  max-width: 1440px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
`;
export const FlexBox = styled("div")`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};
  width: 100%;
  height: auto;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;
export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;
// Modal
export const ModalLayout = styled(FlexColumn)`
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalTitle = styled.h2`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  text-align: center;
`;

// Error Message
export const ErrorMsg = styled("span")`
  color: red;
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;
