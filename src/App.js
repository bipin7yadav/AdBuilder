import './App.css';
import { useState } from "react";
import TabNavigation from "./components/Tabs";
import Feed from "./components/Feed";
import Builder from "./components/Builder";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState(null);
  console.log("tabIndex : ", tabIndex);

  const redirectToBuilder = (asset) => {
    setSelectedAsset(asset);
    setTabIndex(1);
  }
  

  return (
    // <Builder selectedAsset={selectedAsset} />
    <div>
      <TabNavigation setTabIndex={setTabIndex} />
      {tabIndex === 0 && <Feed onSelect={redirectToBuilder} />}
      {tabIndex === 1 && selectedAsset && <Builder selectedAsset={selectedAsset} />}
    </div>
  );
}

export default App;

