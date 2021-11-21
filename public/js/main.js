const subButton = document.getElementById("subButton");
const cityname = document.getElementById("cityName");
const city_name = document.getElementById("outputCity");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const outputCity = document.getElementById("outputCity");
const mainLayer = document.getElementById("main_layer");

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
            outputCity.innerText = `${city.toUpperCase()}, ${country}`;
            const tempStatus = arr[0].weather[0].main;
            
            if(tempStatus === "Clear"){
                temp_status.classList.add("fa-sun");
            }else if(tempStatus === "Haze"){
                temp_status.classList.add("fa-smog");
            }else if(tempStatus === "Clouds"){
                temp_status.classList.add("fa-cloud");
            }
            else if(tempStatus === "Rain"){
                temp_status.classList.add("fa-cloud-rain");
            }
            else {
                temp_status.classList.add("fa-cloud");
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