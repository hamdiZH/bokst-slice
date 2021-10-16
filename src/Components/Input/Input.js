import React from "react";
import { FormikInput } from "./Input.Style";

const Input = ({ isRequired, name, type, placeholder, width }) => {
  return (
    <FormikInput
      name={name}
      required={isRequired}
      type={type}
      placeholder={placeholder}
      width={width}
    />
  );
};

export default Input;
