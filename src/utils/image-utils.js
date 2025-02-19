// function getImageURL(name) {
//     return new URL(`../Assets/Images/${name}`, import.meta.url).href
//   }
  
//   export {getImageURL};

function getImageURL(name) {
    try {
      return require(`../Assets/Images/${name}`);
    } catch (e) {
      console.error("Image not found:", name);
      return null;
    }
  }
  
  export { getImageURL };
  