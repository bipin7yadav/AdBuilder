import { createStore } from "polotno/model/store";
import { useEffect, useState } from "react";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { PagesTimeline } from 'polotno/pages-timeline';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { SidePanel } from 'polotno/side-panel';
import { Workspace } from 'polotno/canvas/workspace';
import { getImageURL } from "../utils/image-utils";

import '@blueprintjs/core/lib/css/blueprint.css';

function Builder({ selectedAsset }) {
    console.log("builder :",selectedAsset);
    
  const store = createStore({
    key: 'nFA5H9elEytDyPyvKL7T', // Get your key from https://polotno.com/cabinet/
    showCredit: true, // Keep it to support Polotno
  });

  const [loaded, setLoaded] = useState(false);
  store.addPage();

  // Add selected image to the Polotno workspace
  useEffect(() => {
    if (selectedAsset && !loaded) {
      const page = store.pages[0]; // Get the first page
      if (!page) {
        // If no pages exist, add a new page
        // store.addPage();
      }
      page.addElement({
        type: "image",
        src: getImageURL(selectedAsset.name), // Load selected image
        width: 900, // Adjust size
        height: 900, // Adjust size
      });
      // setLoaded(true);
    }
  }, [selectedAsset, store]);

  return (
    <PolotnoContainer style={{ width: '100vw', height: '90vh' }}>
      <SidePanelWrap>
        <SidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
        <PagesTimeline store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
}

export default Builder;
