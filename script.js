function filterByCity(targetCity, listingCityArray) {
  let matchingIndices = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      matchingIndices.push(i);
    }
  }
  return matchingIndices;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // Note: Comment out the following line when you start working on this function!
  let matchingIndices = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] < maxPrice && listingPriceArray[i] > minPrice) {
      matchingIndices.push(i);
    }
  }
  return matchingIndices;
  //return [...listingPriceArray.keys()];
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  // Note: Comment out the following line when you attempt the LevelUp!

  return [...listingTypeArray.keys()];
}
