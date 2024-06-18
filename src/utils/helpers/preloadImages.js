const preloadImages = []

export default (imageSrcArr = []) => {
  // preload images to smoothen transitions
  const promises = []
  imageSrcArr.forEach((src) => {
    promises.push(new Promise(((resolve) => {
      if (preloadImages.map(img => img.src).includes(src)) {
        resolve()
        return
      }
      const img = new Image()
      img.onload = resolve
      img.src = src
      preloadImages.push(img)
    })))
  })

  return Promise.all(promises)
}
