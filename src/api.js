var _ = require('lodash'); // To make description Uppercase
var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=f557b20727184231a597c710c8be3106'

var kelvinToC = function(kelvin) {
  return  Math.round(kelvin - 273.15) + '˚C'
}

module.exports = function(latitude,longitude){
var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

//fetch return the promise and json return the promise that`s why I use then twice
return fetch(url)
  .then(function(response){
      return response.json()
  })
  .then(function(json){
    return {
      city:json.name,
      temperature: kelvinToC(json.main.temp),
      description: _.capitalize(json.weather[0].description)
    }
  });
}
