const unsplashAccessKey = "6iCkO_Dp6FsHvfzPseGCd8h0AsgiNGRo8SBWUU2uROo";

async function fetchImageUrl(region) {
  try {
    let searchQuery = region;
    let URL = `https://api.unsplash.com/search/photos?client_id=${unsplashAccessKey}&query=${searchQuery}&orientation=landscape`;
    const response = await fetch(URL);
    const imagesInfo = await response.json();

    // No image found
    if (imagesInfo.results.length === 0) {
      // set some default image
      throw new Error("no image results found");
    }

    // TODO: Return only images with aspect ratios approximately equal to client's viewport
    const image = imagesInfo.results[0].urls.raw;
    return image;
  } catch (error) {
    throw new Error(error);
  }
}

export default fetchImageUrl;
