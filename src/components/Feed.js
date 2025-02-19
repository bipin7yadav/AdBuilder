import React from "react";
// import img2 from "../Assets/Images/3.jpg";
import { getImageURL } from "../utils/image-utils";
// const images = [
//     { id: 1, src: "../Assets/Images/3.jpg",name:"3.jpg", header: "Ad Banner 1" },
//     { id: 2, src: "../Assets/Images/8.jpg",name:"8.jpg", header: "Ad Banner 2" },
//     { id: 3, src: "../Assets/Images/60.jpg",name:"60.jpg", header: "Ad Banner 1" },
//     { id: 4, src: "../Assets/Images/64.jpg",name:"64.jpg", header: "Ad Banner 2" },
//     { id: 5, src: "../Assets/Images/68.jpg",name:"68.jpg", header: "Ad Banner 1" },
//     { id: 6, src: "../Assets/Images/76.jpg", name:"76.jpg",header: "Ad Banner 2" },
//     { id: 7, src: "../Assets/Images/84.jpg", name:"84.jpg",header: "Ad Banner 1" },
//     { id: 8, src: "../Assets/Images/86.jpg",name:"86.jpg" ,header: "Ad Banner 2" },
//     { id: 9, src: "../Assets/Images/90.jpg",name:"90.jpg" ,header: "Ad Banner 1" },
//     { id: 10, src: "../Assets/Images/101.jpg",name:"101.jpg", header: "Ad Banner 2" },
//     { id: 11, src: "../Assets/Images/113.jpg",name:"113.jpg", header: "Ad Banner 1" },
//     { id: 12, src: "../Assets/Images/IMG.jpg",name:"IMG.jpg", header: "Ad Banner 2" },
//   ];

const images = [
    { id: 1, src: "../Assets/Images/A1.jpg", name: "A1.jpg", header: "Ad Banner 1" },
    { id: 2, src: "../Assets/Images/A2.jpg", name: "A2.jpg", header: "Ad Banner 2" },
    { id: 3, src: "../Assets/Images/60.jpg", name: "60.jpg", header: "Ad Banner 1" },
    { id: 4, src: "../Assets/Images/64.jpg", name: "64.jpg", header: "Ad Banner 2" },
    { id: 5, src: "../Assets/Images/68.jpg", name: "68.jpg", header: "Ad Banner 1" },
    { id: 6, src: "../Assets/Images/76.jpg", name: "76.jpg", header: "Ad Banner 2" },
    { id: 7, src: "../Assets/Images/84.jpg", name: "84.jpg", header: "Ad Banner 1" }, 
    { id: 8, src: "../Assets/Images/86.jpg", name: "86.jpg", header: "Ad Banner 2" }, 
    { id: 9, src: "../Assets/Images/90.jpg", name: "90.jpg", header: "Ad Banner 1" }, 
    { id: 10, src: "../Assets/Images/101.jpg", name: "101.jpg", header: "Ad Banner 2" }, 
    { id: 11, src: "../Assets/Images/113.jpg", name: "113.jpg", header: "Ad Banner 1" },
    { id: 12, src: "../Assets/Images/IMG.jpg", name: "IMG.jpg", header: "Ad Banner 2" }, 
];

const getImagePath = (name) => {
    return `../Assets/Images/${name}`;
}
  
  function Feed({ onSelect }) {
    return (
      <div style={{ display: "flex",flexDirection:"column", flexWrap: "wrap", gap: "10px", height: "90vh", overflowY: "scroll", width: "100vw", padding: "10px" }}>
        {images.map((img) => {
            return (
          <div key={img.id} onClick={() => onSelect(img)} style={{ cursor: "pointer", height: "150px", width: "150px", border: "1px solid black", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <img src={getImageURL(img.name)} loading="lazy" alt={img.header} style={{ width: "100%", height: "auto" }} />
            <p style={{ textAlign: "center", margin: "5px 0 0 0", fontSize: "14px", fontWeight: "bold" }}>{img.header}</p>
          </div>
        )})}
      </div>
    );
  }
  
  export default Feed;
  