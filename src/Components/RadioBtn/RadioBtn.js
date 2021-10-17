import React from "react";
import { FlexBox } from "../../App.Style";
import { RadioBtnLabel, RadioBtnWrap, RadioInput } from "./RadioBtn.Style";
import { Field } from "formik";
const RadioBtn = ({ label, name, options, style, ...rest }) => {
  return (
    <RadioBtnWrap style={style}>
      <RadioBtnLabel>{label}</RadioBtnLabel>
      <Field name={name} {...rest}>
        {({ field }) => {
          // console.log("Filed", field);
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <FlexBox style={{ flexBasis: "25%" }}>
                  <RadioInput
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </FlexBox>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </RadioBtnWrap>
  );
};

export default RadioBtn;
