//Get All Values
const inputTXT = document.querySelector('.inputTXT');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

//Get Api Key By Login To openweather.org
const API_Key = "f53d6e8694aabd6836c1a88352d17e29";

//Now Add Event Listener
button.addEventListener('click',() => {

    //Get Input Value
    const cityInput = inputTXT.value;
   // console.log(cityInput);

    //Now Fetch Through Get API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
    .then(res => res.json())
    .then(data => {
       // console.log(data);

        //When Fill Field then Clear Input Field
        inputTXT.value = " ";

        //Now Show All Data Value
        showData.innerHTML = `
                             <ul>
                             <li class="desc">${data.weather[0].description}</li>
                             <li class="city">${data.name}</li>
                             <li class="temp">${data.main.temp}°c</li>
                             </ul>        
                            `;

    });

});
