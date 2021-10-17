import React, {useEffect} from "react";
import { Formik, Form } from "formik";

import Input from "../../../../../Components/Input/Input";
import RadioBtn from "../../../../../Components/RadioBtn/RadioBtn";
import SelectOptions from "../../../../../Components/Select/SelectOptions";
import Btn from "../../../../../Components/Button/Btn";
import { ModalTitle } from "../../../../../App.Style";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {getDisciplinesAction, getDisciplinesSelector} from "../../../../../store/accountReducer/getDisciplinesReducer";
const DisciplineEditModel = () => {
  const privacyOptions = [
    { key: "Public", value: "public" },
    { key: "Private", value: "private" },
  ];
  const InsuredOptions = [
    { key: "Yes", value: "yes" },
    { key: "No", value: "no" },
  ];

  const classOptions = [
    { key: "Select your class", value: "" },
    { key: "Judo", value: "judo" },
    { key: "Karate", value: "karate" },
    { key: "Kong fu", value: "kongfu" },
  ];

  const gymOptions = [
    { key: "Select your gym", value: "" },
    { key: "Judo", value: "judo" },
    { key: "Karate", value: "karate" },
    { key: "Kong fu", value: "kongfu" },
  ];

  const associationOptions = [
    { key: "Select your association", value: "" },
    { key: "TAB Trans America Boxing", value: "TAB Trans America Boxing" },
    { key: "IAB International Association of Boxing International Amateur Boxing", value: "IAB International Association of Boxing International Amateur Boxing" },
    { key: "WBU World Boxing Union", value: "WBU World Boxing Union" },
  ];

  const dispatch = useDispatch();
  const history = useHistory();

  const { disciplinesDataComes, loading, hasError } = useSelector(getDisciplinesSelector);

  useEffect(() => {
    dispatch(getDisciplinesAction())
  }, [dispatch]);


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
              {/*{disciplinesDataComes.data.map((item) => {*/}
              {/*  console.log(item.name)*/}
              {/*})}*/}
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
                name={classOptions}
                options={classOptions}
                width={"362px"}
              />
              <SelectOptions
                name={gymOptions}
                options={gymOptions}
                width={"362px"}
                style={{
                  marginBottom: "18px",
                  marginTop: "18px",
                }}
              />
              <SelectOptions
                name={associationOptions}
                options={associationOptions}
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
