import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import LogoImage from "../../../../Assets/Images/bokst-logo.png";
import Btn from "../../../../Components/Button/Btn";
import Input from "../../../../Components/Input/Input";
import RadioBtn from "../../../../Components/RadioBtn/RadioBtn";
import {
  AccountChoice,
  HeadingTxt,
  InnerSection,
  ItemWrap,
  LogoImg,
  QAccount,
} from "../../AuthLayout.Style";
import {
  Backdrop,
  ErrorMsg,
  FlexBox,
  MainContainer,
  ModalLayout,
  StyledModal,
} from "../../../../App.Style";
import RegisterSuccessModal from "./Components/RegisterSuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  promoterSignupAction,
  signupSelector,
} from "../../../../store/accountReducer/signupReducer";
import { loginSelector } from "../../../../store/accountReducer/loginReducer";
import { SignupSchema } from "../../../../Validation/SignupSchema";

const SignupPromoter = () => {
  const genderOptions = [
    { key: "Male", value: "M" },
    { key: "Female", value: "F" },
  ];
  const privacyOptions = [
    { key: "Public", value: false },
    { key: "Private", value: true },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(loginSelector);
  const { loading, hasErrors } = useSelector(signupSelector);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const handleSaveChanges = (values, history) => {
    values.user_role = "P";
    values.username = values.firstName.concat(values.lastName);
    console.log("username: ", values.username);
    dispatch(promoterSignupAction(values, history));
  };

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
        <ModalLayout maxWidth={"707px"} minHeight={"365px"}>
          <RegisterSuccessModal />
        </ModalLayout>
      </StyledModal>

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
              website: "",
              linkedin: "",
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
                        placeholder="****"
                        width={"332"}
                      />
                      {errors.password && touched.password ? (
                        <ErrorMsg>{errors.password}</ErrorMsg>
                      ) : null}
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="email"
                        name="email"
                        placeholder="John@gmail.com"
                        width={"362"}
                      />
                      {errors.email && touched.email ? (
                        <ErrorMsg>{errors.email}</ErrorMsg>
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
                        type="text"
                        name="address"
                        placeholder="Address"
                        width={"362"}
                      />
                    </ItemWrap>
                    <ItemWrap style={{ marginRight: "auto" }}>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        width={"332"}
                      />
                    </ItemWrap>
                    <ItemWrap />

                    <ItemWrap>
                      <Input
                        type="text"
                        name="website"
                        placeholder="Website Link"
                        width={"332"}
                      />
                      {errors.website && touched.website ? (
                        <ErrorMsg>{errors.website}</ErrorMsg>
                      ) : null}
                    </ItemWrap>
                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptionsWebsite"
                        options={privacyOptions}
                      />
                    </ItemWrap>

                    <ItemWrap>
                      <Input
                        type="text"
                        name="linkedin"
                        placeholder="LinkedIn Link"
                        width={"332"}
                      />
                      {errors.linkedin && touched.linkedin ? (
                        <ErrorMsg>{errors.linkedin}</ErrorMsg>
                      ) : null}
                    </ItemWrap>
                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptionsLinkedIn"
                        options={privacyOptions}
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
                        name="privacyOptionsFacebook"
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
                        name="privacyOptionsInstagram"
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

                      {hasErrors ? <ErrorMsg>{hasErrors}</ErrorMsg> : null}
                    </ItemWrap>
                    <ItemWrap>
                      <RadioBtn
                        label="Privacy"
                        name="privacyOptionsTwitter"
                        options={privacyOptions}
                      />
                    </ItemWrap>
                  </FlexBox>
                  {/* <Btn
                    onClick={handleOpen}
                    text={"Submit"}
                    width={"170px"}
                    style={{ marginTop: "40px", marginBottom: "8px" }}
                  /> */}
                  <Btn
                    // onClick={handleOpen}
                    isLoading={loading}
                    type={"submit"}
                    text={"Submit"}
                    width={"170px"}
                    style={{ marginTop: "40px", marginBottom: "8px" }}
                  />
                </Form>
              );
            }}
          </Formik>
          {/* Formik */}

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

export default SignupPromoter;
