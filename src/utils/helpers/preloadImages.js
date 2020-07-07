export default (imageSrcArr = []) => {
  // preload images to smoothen transitions
  imageSrcArr.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
