// My attempt to make a nice looking weather page with current temps, limited forecast and historical high/low temps
/* global $ */
/* global _ */
/* global fetch */

var zipSearch = $("input#zip");
var zipForm = $("form#search");

// Zip field listener
zipSearch.on("input change", async function(e)
{
    zipForm.find("button").attr("disabled", !isValid());
});

// Search button fetch from OpenWeatherMap's on-call-api on valid field entry
zipForm.on("submit", async function(e)
{
    e.preventDefault();
    let zip = zipSearch.val();
    let apiKey = `0b38e9cfad6d631affd7428efb53eb54`;
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`;
    let response = await fetch(url);
    let data = await response.json();

    // check to see if the zip code is valid
    if (data.cod != 404)
    {
        $("#error").html("");
        $("#current").html("Current temperature for " + data.name + " is " + data.main.temp.toPrecision(2) + "&#176;F");
        //$("#conditions").html("Conditions are "
        //let iconURL = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        //console.log(iconURL);
        $("#conditions").html("Conditions are "+data.weather[0].main.toLowerCase()+"<img src='https://openweathermap.org/img/w/"+data.weather[0].icon+".png'>");
        $("#feels").html("It feels like  " + data.main.feels_like.toPrecision(2) + "&#176;F");
    }
    else
    {
        $("#error").html("Unknown zip code");
        $("#error").css("color", "red");
    }
    $("form#search")[0].reset();
    $("input#zip").css("font-weight", "normal")
});

// Enables search button and changes search field colors if 5 digit zip (also during input)
function isValid()
{
    let isValid = true;
    if (zipSearch.val().length < 5)
    {
        isValid = false;
        zipSearch.css("color", "red");
        zipSearch.css("font-weight", "normal");
    }
    else
    {
        zipSearch.css("color", "CornflowerBlue");
        zipSearch.css("font-weight", "bold");
    }
    return isValid;
}