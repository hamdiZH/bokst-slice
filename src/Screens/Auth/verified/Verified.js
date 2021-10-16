import React from "react";
import { InnerSection, LogoImg } from "../AuthLayout.Style";
import LogoImage from "../../../Assets/Images/bokst-logo.png";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { MainContainer, ModalTitle } from "../../../App.Style";
import Btn from "../../../Components/Button/Btn";

const Verified = () => {
  return (
    <MainContainer>
      <InnerSection>
        <LogoImg
          src={LogoImage}
          alt="bokst"
          style={{ marginTop: "100px", marginBottom: "64px" }}
        />
        <CheckCircleRoundedIcon color="success" sx={{ fontSize: 80 }} />
        <ModalTitle
          marginTop={"56px"}
          marginBottom={"24px"}
          id="unstyled-modal-title"
        >
          You have been registered successfully
        </ModalTitle>
        <Btn
          text={"Login"}
          link={"/login"}
          width={"170px"}
          style={{ marginTop: "40px", marginBottom: "40px" }}
        />
      </InnerSection>
    </MainContainer>
  );
};

export default Verified;
