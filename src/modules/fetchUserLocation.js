const ipinfoKey = "dfe1473c15d707";

async function fetchUserLocation () {
  let response = await fetch(`https://ipinfo.io?token=${ipinfoKey}`);
  let userIPInfo = await response.json();
  return {
    "location": userIPInfo.loc,
    "city": userIPInfo.city,
    "region": userIPInfo.region, 
  };
}

export default fetchUserLocation;

