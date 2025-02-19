import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

function TabNavigation({ setTabIndex }) {
  const [tabIndex, setIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setIndex(newIndex);
    setTabIndex(newIndex);
  };

  return (
    <Tabs value={tabIndex} onChange={handleChange}>
      <Tab label="Feed" />
      <Tab label="Builder" />
    </Tabs>
  );
}

export default TabNavigation;
