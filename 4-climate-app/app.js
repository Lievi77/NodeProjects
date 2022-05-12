/* A simple application to know the climate 
API USED for climate data: City Geo-Location Lookup 
@author: Lev C. Guzman Aparicio
@email: levcguzman77@gmail.com 
*/
//Open Weather API key: f9652d32a83b0afbba83a63dee664826
//example of GET call:
//api.openweathermap.org/data/2.5/weather?id=524901&appid=YOUR_API_KEY

const logic = require("./logic/logic");

const argv = require("./config/yargs").argv; //usual yargs config

//for debug
//console.log(`Location argument before encoding: ${argv.location} `);

logic.getPlaceLatLong(argv.location).then((ans) => {
  console.log(ans);
});
