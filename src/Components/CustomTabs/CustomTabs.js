import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { FlexColumn, FlexBox } from "../../App.Style";
import AllEvents from "../../Screens/Admin/Events/AllEvents";
import LiveEvents from "../../Screens/Admin/Events/LiveEvents";
import ClosedEvents from "../../Screens/Admin/Events/ClosedEvents";
import CancelledEvents from "../../Screens/Admin/Events/CancelledEvents";
import CreatedAndSavedEvents from "../../Screens/Admin/Events/CreatedAndSavedEvents";
import { TabsWrap } from "./CustomTabs.Style";
import { ScrollContent } from "../Layout/Layout.Style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <ScrollContent>
          <FlexBox style={{ padding: "40px 0" }}>{children}</FlexBox>
        </ScrollContent>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CustomTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, eventName) => {
    setValue(eventName);
  };
  return (
    <FlexColumn alignItems={"Start"}>
      <TabsWrap>
        <Tabs
          indicatorColor={""}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            padding: "5px",
            "& .MuiTab-root": {
              width: "200px",
              color: "#707070",
              textTransform: "capitalize",
            },
            "& .MuiTab-root.Mui-selected": {
              backgroundColor: "#AD2121",
              color: "#ffffff",
              borderBottom: "0px",
              borderRadius: "5px",
            },
          }}
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="live" {...a11yProps(1)} />
          <Tab label="created and saved" {...a11yProps(2)} />
          <Tab label="Closed" {...a11yProps(3)} />
          <Tab label="Cancelled" {...a11yProps(4)} />
        </Tabs>
      </TabsWrap>

      <TabPanel value={value} index={0}>
        <AllEvents />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LiveEvents />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CreatedAndSavedEvents />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ClosedEvents />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CancelledEvents />
      </TabPanel>
    </FlexColumn>
  );
};

export default CustomTabs;
