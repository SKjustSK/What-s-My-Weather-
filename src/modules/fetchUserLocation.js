const ipinfoKey = "dfe1473c15d707";

async function fetchUserLocation() {
  try {
    let response = await fetch(`https://ipinfo.io?token=${ipinfoKey}`);
    let userIPInfo = await response.json();
    return {
      location: userIPInfo.loc,
      city: userIPInfo.city,
      region: userIPInfo.region,
    };
  } catch (error) {
    // TODO: if cannot fetch location, return a default location
    throw new Error(error);
  }
}

export default fetchUserLocation;
