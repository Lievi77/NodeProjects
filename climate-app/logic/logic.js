const axios = require("axios"); //axios

const getPlaceLatLong = (location) => {
  const encodedURI = encodeURI(location);
  console.log(`Encoded location: ${encodedURI}`); //encodes special characters such as spaces for use in URL

  //openweather does not require a header
  const weatherReq = axios.create({
    //always put the https/http protocol when doing calls
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedURI}&appid=f9652d32a83b0afbba83a63dee664826`,
  });

  //execute weather call
  //notice how we handle requests, promises
  weatherReq
    .get()
    .then((ans) => {
      console.log(ans.data); //status code are in the 200's
    })
    .catch((err) => {
      console.log("Error!!!", err); //status codes are in the 400's
    });

  //we will only return the latitude and longitude of the requested place

  return { location, lat, lng };
};

module.exports = { getPlaceLatLong };
