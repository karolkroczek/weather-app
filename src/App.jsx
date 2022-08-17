import './App.css'
import WeatherPanel from './components/WeatherPanel'
import { useState,useEffect } from 'react'

function App() {
  const [position, setPosition] = useState(undefined)

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(({coords})=>{

      setPosition({
        lat:coords.latitude,
        lon:coords.longitude
      })
    },
    ()=>{
      console.log('Nie udało sie pobrac lokalizacji')
    })

  }, [])
  
  return (
<>
<WeatherPanel position={position?position:{lon:50,lat:20}}/>
</>
  )
}

export default App
