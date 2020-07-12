export default (totalDuration, sectionItems = [6, 1, 4, 8]) => {
  const animationParams = [];
  const headlineTotalDuration = totalDuration / 2;
  const headlineSingleDuration = headlineTotalDuration / sectionItems.length;

  sectionItems.forEach((itemCount, i) => {
    let contentIterationDelay;
    let contentSingleDuration;
    if (itemCount === 1) {
      contentSingleDuration = (totalDuration - headlineSingleDuration * (i + 1));
      contentIterationDelay = ((totalDuration - contentSingleDuration) - (headlineSingleDuration * (i + 1)));
    } else {
      contentSingleDuration = (totalDuration - headlineSingleDuration * (i + 1)) / (itemCount * 0.5);
      contentIterationDelay = ((totalDuration - contentSingleDuration) - (headlineSingleDuration * (i + 1))) / (itemCount - 1);
    }

    animationParams.push({
      headline: {
        duration: headlineSingleDuration,
        delay: headlineSingleDuration * i,
      },
      content: {
        duration: contentSingleDuration,
        delay: headlineSingleDuration * (i + 1),
        iterationDelay: contentIterationDelay,
      },
    });
  });

  return animationParams;
};
