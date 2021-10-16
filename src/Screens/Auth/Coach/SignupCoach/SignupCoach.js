import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import Btn from "../../../../Components/Button/Btn";
import Input from "../../../../Components/Input/Input";
import RadioBtn from "../../../../Components/RadioBtn/RadioBtn";
import SelectOptions from "../../../../Components/Select/SelectOptions";
import {
  AccountChoice,
  HeadingTxt,
  InnerSection,
  ItemWrap,
  LogoImg,
  QAccount,
} from "../../AuthLayout.Style";
import {
  MainContainer,
  Backdrop,
  ErrorMsg,
  FlexBox,
  ModalLayout,
  StyledModal,
} from "../../../../App.Style";
import LogoImage from "../../../../Assets/Images/bokst-logo.png";
import DisciplineEditModel from "./Components/DisciplineEditModel";
import { EditLink, EditWrapper } from "./SignupCoach.Style";
import { SignupSchema } from "../../../../Validation/SignupSchema";

const SignupCoach = () => {
  const genderOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const privacyOptions = [
    { key: "Public", value: "public" },
    { key: "Private", value: "private" },
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSelectOnChange = () => handleOpen();
  return (
    <>
      {/* Modal */}
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <ModalLayout maxWidth={"707px"} minHeight={"530px"}>
          <DisciplineEditModel />
        </ModalLayout>
      </StyledModal>
      {/* Page content */}
      <MainContainer>
        <InnerSection>
          <LogoImg src={LogoImage} alt="bokst" style={{ marginTop: "100px" }} />
          <HeadingTxt>
            Hello promoter , fill the fields below and complete <br /> your
            registration
          </HeadingTxt>

          {/* Formik */}
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              password: "",
              email: "",
              phone: "",
              address: "",
              genderOptions: "",
              disciplineOptions: "",
              facebook: "",
              instagram: "",
              twitter: "",
            }}
            validationSchema={SignupSchema()}
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
                  <FlexBox alignItems="start" flexWrap="wrap">
                    <ItemWrap>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="John"
                        width={"332"}
                      />
                      {errors.firstName && touched.firstName ? (
                        <ErrorMsg>{errors.firstName}</ErrorMsg>
                      ) : null}
                    </ItemWrap>
                    <ItemWrap>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        width={"362"}
                      />
                      {errors.lastName && touched.lastName ? (
                        <ErrorMsg>{errors.lastName}</ErrorMsg>
                      ) : null}
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="password"
                        name="password"
                        placeholder="********"
                        width={"332"}
                      />
                      {errors.password && touched.password ? (
                        <ErrorMsg>{errors.password}</ErrorMsg>
                      ) : null}
                    </ItemWrap>

                    <ItemWrap>
                      <RadioBtn
                        label="Gender"
                        name="genderOptions"
                        options={genderOptions}
                      />
                      {errors.genderOptions && touched.genderOptions ? (
                        <ErrorMsg>{errors.genderOptions}</ErrorMsg>
                      ) : null}
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="email"
                        name="email"
                        placeholder="John@gmail.com"
                        width={"332"}
                      />
                      {errors.email && touched.email ? (
                        <ErrorMsg>{errors.email}</ErrorMsg>
                      ) : null}
                    </ItemWrap>

                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptions"
                        options={privacyOptions}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="address"
                        placeholder="Address"
                        width={"332"}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptions"
                        options={privacyOptions}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        width={"332"}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptions"
                        options={privacyOptions}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="32"
                        placeholder="32"
                        width={"332"}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="fightRecord"
                        placeholder="Fight record (win-loss-draw)"
                        width={"362"}
                      />
                    </ItemWrap>
                    <ItemWrap>
                      <EditWrapper>
                        <span> Discipline 1</span>
                        <EditLink onClick={handleOpen}>Edit</EditLink>
                      </EditWrapper>
                    </ItemWrap>
                    <ItemWrap>
                      <SelectOptions
                        name={disciplineOptions}
                        options={disciplineOptions}
                        // onChange={handleSelectOnChange}
                        width={"362px"}
                        style={{ width: "100%" }}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="facebook"
                        placeholder="Facebook Link"
                        width={"332"}
                      />
                      {errors.facebook && touched.facebook ? (
                        <ErrorMsg>{errors.facebook}</ErrorMsg>
                      ) : null}
                    </ItemWrap>
                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptions"
                        options={privacyOptions}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="instagram"
                        placeholder="Instagram Link"
                        width={"332"}
                      />
                      {errors.instagram && touched.instagram ? (
                        <ErrorMsg>{errors.instagram}</ErrorMsg>
                      ) : null}
                    </ItemWrap>
                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptions"
                        options={privacyOptions}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="twitter"
                        placeholder="Twitter Link"
                        width={"332"}
                      />
                      {errors.twitter && touched.twitter ? (
                        <ErrorMsg>{errors.twitter}</ErrorMsg>
                      ) : null}
                    </ItemWrap>
                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptions"
                        options={privacyOptions}
                      />
                    </ItemWrap>
                  </FlexBox>

                  <Btn
                    type={"submit"}
                    text={"Submit"}
                    width={"170px"}
                    style={{ marginTop: "40px", marginBottom: "8px" }}
                  />
                </Form>
              );
            }}
          </Formik>
          <QAccount>
            Already have an account ?
            <Link to="/login">
              <AccountChoice>Log in</AccountChoice>
            </Link>
          </QAccount>
        </InnerSection>
      </MainContainer>
    </>
  );
};

export default SignupCoach;
