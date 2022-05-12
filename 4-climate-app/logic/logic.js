/* File to handle all the logic (i.e. API calls and info retrieval) for our apps */

const axios = require("axios"); //axios

//* AN ASYNC METHOD ALWAYS RETURNS A JS PROMISE
const getPlaceLatLong = async (location) => {
  const encodedURI = encodeURI(location);
  console.log(`Encoded location: ${encodedURI}`); //encodes special characters such as spaces for use in URL

  //openweather does not require a header
  const weatherReq = axios.create({
    //always put the https/http protocol when doing calls
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedURI}&appid=f9652d32a83b0afbba83a63dee664826`,
  });

  //execute weather call
  //notice how we handle requests, promises
  const ans = await weatherReq.get(); // async/await functions almost like in flutter

  if (ans.data.cod == "404") {
    //not found error
    throw new Error(`City not found: ${location}`);
  }

  //extracting desired data from the response JSON
  const data = ans.data;
  const desiredLoc = data.name + "," + data.sys.country;
  const lat = data.coord.lat;
  const lon = data.coord.lon;

  //we will only return the latitude and longitude of the requested place
  return { desiredLoc, lat, lon };
};

module.exports = { getPlaceLatLong };
