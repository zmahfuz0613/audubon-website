const featureTitleArray
const removeArticleRegex = RegExp(/^(The|An|A)\s+/, "i")

const filteredTitleArray = featureTitleArray
  .map(featureTitle => featureTitle.replace(removeArticleRegex, ""))
  .sort()

  // oh, but also add the article back.