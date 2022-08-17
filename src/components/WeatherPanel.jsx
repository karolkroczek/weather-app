import React from 'react'
import axios from 'axios'
import keys from '../../keys'
import { useEffect, useState } from 'react'


function WeatherPanel({position}) {
    const [weather,setWeather] = useState('')

    const lat = position.lat
    const lon = position.lon
    
    
    const ddd = useEffect(() => {  

    async function getWeatherData(){
      const url = keys.weather_href+`?lat=${lat}&lon=${lon}&appid=${keys.api_key}`
      const res = await axios.get(url)

      const weatherScheme = {
        city: res.data.name,
        temp: Math.floor(res.data.main.temp-273.15),
        weather: res.data.weather.at(0).description,
        iconLink: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
        altText: res.data.weather[0].main
      }

      setWeather(weatherScheme)
    }


      getWeatherData()
    }, [weather])
    


  return (
    <div>
    <h2>{weather.city}</h2>
    <img src={weather.iconLink} alt={weather.altText}/>
    <h3>{weather.temp} °C</h3>
    <big>{weather.weather}</big>

    </div>
  )
}

export default WeatherPanel