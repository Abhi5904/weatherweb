const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById("submit")

const city_name = document.getElementById('city_name')

const tempStatus = document.getElementById('tempStatus')
const temp = document.getElementById('temp')

const dataHide = document.querySelector('.middleLayer')

const getInfo = async (event)=>{
    event.preventDefault()
    let cityVal = cityName.value
    if(cityVal === ""){
        city_name.innerText = "please write city name"
        dataHide.classList.add('data_hide')
    }
    else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c00d4b9649e81d9f69883abbc750c6eb`
        const response = await fetch(url)
        const data = await response.json()
        const arrData = [data]

        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
        temp.innerText = arrData[0].main.temp +"°C"

        const tempMod = arrData[0].weather[0].main

        if(tempMod=="Clear"){
            tempStatus.innerHTML = '<i class="fa-solid fa-sun" style="color:#eccc68"></i>'
        }
        else if(tempMod=="Clouds"){
            tempStatus.innerHTML = '<i class="fa-solid fa-cloud" style="color:#f1f2f6"></i>'
        }
        else if(tempMod=="Rain"){
            tempStatus.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color:#a4b0be"></i>'
        }
        else{
            tempStatus.innerHTML = '<i class="fa-solid fa-cloud" style="color:#f1f2f6"></i>'

        }

        dataHide.classList.remove('data_hide')
        }
        catch{
            city_name.innerText='please enter valid name'
            dataHide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click',getInfo)