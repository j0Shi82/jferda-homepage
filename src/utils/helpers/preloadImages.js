export default (imageSrcArr = []) => {
  // preload images to smoothen transitions
  const promises = [];
  imageSrcArr.forEach((src) => {
    promises.push(new Promise(((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.src = src;
    })));
  });

  return Promise.all(promises);
};
