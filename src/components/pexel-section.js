import React from "react";
import { InputGroup } from "@blueprintjs/core";
import { ImagesGrid } from "polotno/side-panel/images-grid";
import { getImageSize } from "polotno/utils/image";
import { SectionTab } from "polotno/side-panel";
import { useInfiniteAPI } from "polotno/utils/use-api";
import { t } from "polotno/utils/l10n";
import { getCrop } from "polotno/utils/image";
import SiPexels from "@meronex/icons/si/SiPexels";
import LgCustomerio from '@meronex/icons/lg/LgCustomerio';
import jsonData from "../csvjson.json"

// this is a demo key just for that project
// (!) please don't use it in your projects
// to create your own API key please go here: https://polotno.com/login
const key = "nFA5H9elEytDyPyvKL7T";

// use Polotno API proxy into Pexels
// WARNING: don't use on production! Use your own proxy and Pexles API key
const API = "https://api.polotno.com/api";
const getPexelsAPI = ({ query, page }) =>
  `${API}/get-pexels?query=${query}&per_page=20&page=${page}&KEY=${key}`;



export const PexelsPanel = ({ store }) => {
  // Using your local jsonData instead of fetching from the API
  const dataImages = jsonData; // You can change the slice value as needed

  const corsProxy = "https://cors-anywhere.herokuapp.com/";



  const [query, setQuery] = React.useState("");

  const filteredImages = dataImages.filter((image) =>
    image.brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <InputGroup
        leftIcon="search"
        placeholder={t("sidePanel.searchPlaceholder")}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        style={{
          marginBottom: "20px",
        }}
      />
      <p style={{ textAlign: "center" }}>
        Photos from local dataset
      </p>

      {/* Here we map through the filteredImages to create the grid of images */}
      <ImagesGrid
        images={filteredImages}
        getPreview={(image) => {
          // Use CORS proxy to handle CORS issue
          return image.image_link;  // Adding the proxy URL to the image link
        }}
        onSelect={async (image, pos, element) => {
          const src = image.image_link; // Add the CORS proxy to the image URL

          // If we dropped the image into an svg element, let’s apply the mask for it
          if (element && element.type === "svg" && element.contentEditable) {
            element.set({ maskSrc: src });
            return;
          }

          // Get image size
          const { width, height } = await getImageSize(src);
          console.log("width : ",width);
            console.log("height : ",height);
          

          // If we dropped the image into another image, recalculate the crop and apply it
          if (element && element.type === "image" && element.contentEditable) {
            const crop = getCrop(element, { width, height });
            element.set({ src, ...crop });
            return;
          }

          // Otherwise, create a new image element and position it on the canvas
          const x = (pos?.x || store.width / 3) - width / 3;
          const y = (pos?.y || store.height / 3) - height / 3;
          store.activePage?.addElement({
            type: "image",
            src,
            width,
            height,
            x,
            y,
          });
        }}
        isLoading={false} // Static data, so no need for a loading state
        error={null} // No error handling needed for static data
        loadMore={false} // No need for more images since we're using static data
        getCredit={(image) => (
          <span>
            Image by{" "}
            <a href={image.photographer_url} target="_blank" rel="noopener noreferrer">
              {image.brand} {/* Assuming 'brand' is the closest field for credit */}
            </a>{" "}
            from our local dataset
          </span>
        )}
      />
    </div>
  );
};

// Define the new custom section for the "Pexels" tab
export const PexelsSection = {
  name: "pexels",
  Tab: (props) => (
    <SectionTab name="Custom" {...props}>
      <LgCustomerio />
    </SectionTab>
  ),
  // We need observer to update the component automatically on any store changes
  Panel: PexelsPanel,
};
