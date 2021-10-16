import React from "react";
import { FlexRow } from "../../../App.Style";
import Btn from "../../../Components/Button/Btn";
import CustomTabs from "../../../Components/CustomTabs/CustomTabs";
import { HeaderTitle } from "../../../Components/Layout/Layout.Style";

const Events = () => {
  return (
    <>
      <FlexRow justifyContent="space-between" style={{ marginBottom: "16px" }}>
        <HeaderTitle>Events</HeaderTitle>
        <Btn
          text="Create Event"
          link="/create-event"
          width="170px"
          borderRadius="21px"
        />
      </FlexRow>
      <FlexRow>
        <CustomTabs />
      </FlexRow>
    </>
  );
};

export default Events;
