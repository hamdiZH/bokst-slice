import React from "react";
import Btn from "../../../../../Components/Button/Btn";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { ModalTitle } from "../../../../../App.Style";
const RegisterSuccessModal = () => {
  return (
    <>
      <CheckCircleRoundedIcon color="success" sx={{ fontSize: 80 }} />
      <ModalTitle
        marginTop={"56px"}
        marginBottom={"24px"}
        id="unstyled-modal-title"
      >
        You have been registered successfully
      </ModalTitle>
      <Btn
        text={"Continue"}
        link={"/"}
        width={"170px"}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      />
    </>
  );
};

export default RegisterSuccessModal;
