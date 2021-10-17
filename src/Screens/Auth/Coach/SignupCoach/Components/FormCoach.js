import React from "react";
import {
  Backdrop,
  FlexBox,
  ModalLayout,
  StyledModal,
} from "../../../../../App.Style";
import Input from "../../../../../Components/Input/Input";
import RadioBtn from "../../../../../Components/RadioBtn/RadioBtn";
import SelectOptions from "../../../../../Components/Select/SelectOptions";
import { ItemWrap } from "../../../AuthLayout.Style";
import { EditLink, EditWrapper } from "../SignupCoach.Style";
import DisciplineEditModel from "./DisciplineEditModel";

const FormCoach = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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

      <FlexBox alignItems="start" flexWrap="wrap">
        <ItemWrap>
          <Input
            type="text"
            name="first_name"
            placeholder="John"
            width={"332"}
          />
        </ItemWrap>
        <ItemWrap>
          <Input type="text" name="lastName" placeholder="Doe" width={"362"} />
        </ItemWrap>

        <ItemWrap>
          <Input
            type="password"
            name="password"
            placeholder="********"
            width={"332"}
          />
        </ItemWrap>

        <ItemWrap>
          <RadioBtn
            label="Gender"
            name="gender"
            firstChoice="Male"
            secondChoice="Female"
            firstChoiceValue="male"
            secondChoiceValue="female"
          />
        </ItemWrap>

        <ItemWrap>
          <Input
            type="email"
            name="email"
            placeholder="John@gmail.com"
            width={"332"}
          />
        </ItemWrap>

        <ItemWrap>
          <RadioBtn
            label="Privacy"
            name="emailPrivacy"
            firstChoice="Public"
            secondChoice="Private"
            firstChoiceValue="public"
            secondChoiceValue="private"
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
            name="addressPrivacy"
            firstChoice="Public"
            secondChoice="Private"
            firstChoiceValue="public"
            secondChoiceValue="private"
          />
        </ItemWrap>

        <ItemWrap>
          <Input type="text" name="phone" placeholder="phone" width={"332"} />
        </ItemWrap>

        <ItemWrap>
          <RadioBtn
            label="Privacy"
            name="phonePrivacy"
            firstChoice="Public"
            secondChoice="Private"
            firstChoiceValue="public"
            secondChoiceValue="private"
          />
        </ItemWrap>

        <ItemWrap>
          <Input type="text" name="32" placeholder="32" width={"332"} />
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
          <SelectOptions width={"362px"} />
        </ItemWrap>

        <ItemWrap>
          <Input
            type="text"
            name="facebookLink"
            placeholder="Facebook Link"
            width={"332"}
          />
        </ItemWrap>
        <ItemWrap>
          <RadioBtn
            label="Privacy"
            name="facebookPrivacy"
            firstChoice="Public"
            secondChoice="Private"
            firstChoiceValue="public"
            secondChoiceValue="private"
          />
        </ItemWrap>

        <ItemWrap>
          <Input
            type="text"
            name="insta"
            placeholder="insta Link"
            width={"332"}
          />
        </ItemWrap>
        <ItemWrap>
          <RadioBtn
            label="Privacy"
            name="instagramPrivacy"
            firstChoice="Public"
            secondChoice="Private"
            firstChoiceValue="public"
            secondChoiceValue="private"
          />
        </ItemWrap>

        <ItemWrap>
          <Input
            type="text"
            name="twitterLink"
            placeholder="Twitter Link"
            width={"332"}
          />
        </ItemWrap>
        <ItemWrap>
          <RadioBtn
            label="Privacy"
            name="twitterPrivacy"
            firstChoice="Public"
            secondChoice="Private"
            firstChoiceValue="public"
            secondChoiceValue="private"
          />
        </ItemWrap>
      </FlexBox>
    </>
  );
};

export default FormCoach;
