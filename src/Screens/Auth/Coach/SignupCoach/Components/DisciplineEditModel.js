import React from "react";
import { Formik, Form } from "formik";

import Input from "../../../../../Components/Input/Input";
import RadioBtn from "../../../../../Components/RadioBtn/RadioBtn";
import SelectOptions from "../../../../../Components/Select/SelectOptions";
import Btn from "../../../../../Components/Button/Btn";
import { ModalTitle } from "../../../../../App.Style";
const DisciplineEditModel = () => {
  const privacyOptions = [
    { key: "Public", value: "public" },
    { key: "Private", value: "private" },
  ];
  const InsuredOptions = [
    { key: "Yes", value: "yes" },
    { key: "No", value: "no" },
  ];
  const disciplineOptions = [
    { key: "Select your disciplines", value: "" },
    { key: "Judo", value: "judo" },
    { key: "Karate", value: "karate" },
    { key: "Kong fu", value: "kongfu" },
  ];
  const handleSaveChanges = (value) => {
    console.log(value);
  };

  return (
    <>
      <ModalTitle
        marginTop={"56px"}
        marginBottom={"24px"}
        id="unstyled-modal-title"
      >
        Discipline 1
      </ModalTitle>
      {/* Formik */}
      <Formik
        initialValues={{}}
        // validationSchema={SignupSchema()}
        onSubmit={handleSaveChanges}
      >
        {({ errors, touched }) => {
          return (
            <Form
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Input
                type="text"
                name="startYear"
                placeholder="Start Year"
                width={"362"}
              />
              <RadioBtn
                label="Privacy"
                name="privacyOptions"
                options={privacyOptions}
                style={{
                  width: "362px",
                  marginBottom: "16px",
                  marginTop: "16px",
                }}
              />
              <SelectOptions
                name={disciplineOptions}
                options={disciplineOptions}
                width={"362px"}
              />
              <SelectOptions
                name={disciplineOptions}
                options={disciplineOptions}
                width={"362px"}
                style={{
                  marginBottom: "18px",
                  marginTop: "18px",
                }}
              />
              <SelectOptions
                name={disciplineOptions}
                options={disciplineOptions}
                width={"362px"}
              />
              <RadioBtn
                label="Insured"
                name="InsuredOptions"
                options={InsuredOptions}
                style={{
                  width: "362px",
                  marginBottom: "16px",
                  marginTop: "16px",
                }}
              />
              <Btn
                text={"Confirm"}
                width={"170px"}
                style={{ marginTop: "40px", marginBottom: "8px" }}
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default DisciplineEditModel;
