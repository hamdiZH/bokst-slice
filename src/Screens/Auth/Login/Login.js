import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import {
  ForgetLink,
  InnerSection,
  ItemLoginWrap,
  LogoImg,
  Or,
  QAccount,
} from "../AuthLayout.Style";
import LogoImage from "../../../Assets/Images/bokst-logo.png";

import Btn from "../../../Components/Button/Btn";
import { ErrorMsg, FlexColumn, MainContainer } from "../../../App.Style";
import Input from "../../../Components/Input/Input";

import { LoginSchema } from "../../../Validation/LoginSchema";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {loginAction, loginSelector} from "../../../store/accountReducer/loginReducer";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loginDataComes, loading, hasErrors, isAuthenticated } = useSelector(loginSelector);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const handleSaveChanges = (values, history) => {
    dispatch(loginAction(values, history));
  }

  return (
      !isAuthenticated && (
          <MainContainer>
            <InnerSection>
              <LogoImg
                  src={LogoImage}
                  alt="bokst"
                  style={{ marginTop: "100px", marginBottom: "64px" }}
              />
              <Formik
                  initialValues={{ email: "m.lubbad@smartpace.co.uk", password: "Aj123456789" }}
                  validationSchema={LoginSchema()}
                  onSubmit={handleSaveChanges}
              >
                {({ errors, touched }) => {
                  return (
                      <>
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
                          <FlexColumn>
                            <ItemLoginWrap>
                              <Input
                                  type={"text"}
                                  name={"email"}
                                  placeholder={"email"}
                                  required={true}
                                  width={"362"}
                              />
                              {errors.email && touched.email ? (
                                  <ErrorMsg>{errors.email}</ErrorMsg>
                              ) : null}
                            </ItemLoginWrap>

                            <ItemLoginWrap>
                              <Input
                                  type={"password"}
                                  name={"password"}
                                  placeholder={"****"}
                                  width={"362"}
                                  required={true}
                              />
                              {errors.password && touched.password ? (
                                  <ErrorMsg>{errors.password}</ErrorMsg>
                              ) : null}

                              {hasErrors ? <ErrorMsg>{hasErrors}</ErrorMsg> : null}

                            </ItemLoginWrap>
                          </FlexColumn>

                          <Btn
                              isLoading={loading}
                              text={"Login"}
                              // link={"/"}
                              width={"170px"}
                              type={"submit"}
                              style={{ marginTop: "40px", marginBottom: "8px" }}
                          />
                        </Form>
                      </>
                  );
                }}
              </Formik>

              <Or>OR</Or>
              <QAccount>
                <ForgetLink to="/">Forget Password ?</ForgetLink>
              </QAccount>

              <Btn
                  text={"Register by Email"}
                  link={"signup-promoter"}
                  width={"328px"}
                  style={{
                    marginTop: "40px",
                    marginBottom: "36px",
                    background: "#16181E",
                  }}
              />
            </InnerSection>
          </MainContainer>
      )
  );
};

export default Login;
