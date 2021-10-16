import React from "react";
import {
  StyledFormControl,
  StyledMenuItem,
  StyledSelect,
} from "./Select.Style";
import { makeStyles } from "@mui/styles";

const SelectOptions = ({
  label,
  name,
  options,
  onChange,
  width,
  style,
  innerStyle,
  ...rest
}) => {
  const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-input": {
        color: "#949494",
        fontSize: "14px",
        paddingLeft: 0,
      },
    },
  });
  const [option, setOption] = React.useState("");
  const classes = useStyles();

  return (
    <StyledFormControl style={style}>
      <StyledSelect
        id={name}
        width={width}
        style={{ innerStyle, outline: 0 }}
        className={classes.root}
        value={option}
        onChange={(event) => setOption(event.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {options.map((option) => {
          return (
            <StyledMenuItem
              key={option.value}
              value={option.value}
              style={{ borderBottom: "1px solid #ECECEC" }}
            >
              {option.key}
            </StyledMenuItem>
          );
        })}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default SelectOptions;
