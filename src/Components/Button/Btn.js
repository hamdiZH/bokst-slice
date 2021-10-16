import React from "react";
import { StyledButton } from "./Btn.Style";

const Btn = ({
  text,
  bgColor,
  color,
  width,
  borderRadius,
  isLoading,
  link = "",
  disabled,
  style,
  onClick = () => {},
}) => {
  return (
    <StyledButton
      to={link}
      as={link ? "" : "button"}
      disabled={isLoading}
      onClick={onClick}
      width={width}
      bgColor={bgColor}
      color={color}
      borderRadius={borderRadius}
      style={style}
    >
      {text}
    </StyledButton>
  );
};

export default Btn;
