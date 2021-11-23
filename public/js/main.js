const subButton = document.getElementById("subButton");
const cityname = document.getElementById("cityName");
const city_name = document.getElementById("outputCity");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const outputCity = document.getElementById("outputCity");
const mainLayer = document.getElementById("main_layer");

//other infos
const pressureDiv = document.getElementById("pressure");
const humidityDiv = document.getElementById("humidity");
const feelsDiv = document.getElementById("feelsLike");

const getInfo = async (event) => {
    event.preventDefault();
    let city = cityname.value;
    if(city === ""){
        mainLayer.classList.add("data-hide");
        city_name.innerText = `Please enter city name`;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d27855c59c8be18bdbb40ac0fb79e10a`;
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            const country = arr[0].sys.country;
            temp.innerText = arr[0].main.temp;
            const tempStatus = arr[0].weather[0].main;
            const pressure = arr[0].main.pressure;
            const humidity = arr[0].main.humidity;
            const feels = arr[0].main.feels_like;
            const wind = arr[0].wind.speed;
            pressureDiv.innerText = `Pressure: ${pressure} mbar`;
            humidityDiv.innerText = `Humidity: ${humidity}%`;
            feelsDiv.innerHTML = `<p id="feelsLike">Feels like: ${feels}</span><sup class="bg">o</sup>C</p>`;
            outputCity.innerHTML = `<p class="ranchi">${city.toUpperCase()}, ${country}</p> <p class="wind">Wind speed: ${wind}kmph</p>`;
            
            if(tempStatus === "Clear"){
                temp_status.innerHTML = `<i class="fas fa-sun bg" style='color: #ffc938;' id="temp_status" aria-hidden="true"></i>`;
            }else if(tempStatus === "Haze"){
                temp_status.innerHTML = `<i class="fas fa-smog bg" style='color: #ffc938;' id="temp_status" aria-hidden="true"></i>`;
            }else if(tempStatus === "Mist"){
                temp_status.innerHTML = `<i class="fas fa-smog bg" style='color: #ffc938;' id="temp_status" aria-hidden="true"></i>`;
            }else if(tempStatus === "Smoke"){
                temp_status.innerHTML = `<i class="fas fa-smog bg" style='color: #ffc938;' id="temp_status" aria-hidden="true"></i>`;
            }else if(tempStatus === "Clouds"){
                temp_status.innerHTML = `<i class="fas fa-cloud bg" style='color: #ffc938;' id="temp_status" aria-hidden="true"></i>`;
            }
            else if(tempStatus === "Rain"){
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style='color: #ffc938;' id="temp_status" aria-hidden="true"></i>`;
            }
            else {
                temp_status.innerHTML = `<i class="fas fa-wind" style='color: #313375;' id="temp_status" aria-hidden="true"></i>`;
            }
            mainLayer.classList.remove("data-hide");
        }
        catch{
            mainLayer.classList.add("data-hide");
            city_name.innerText = `Please enter correct city name`;
        }
    }
}

subButton.addEventListener("click", getInfo);