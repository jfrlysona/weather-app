import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
    const [weatherData, setWeatherData]=useState([]);
    const [changeCity, setChangeCity]=useState('baku');
    const ref=useRef();
    let handleClick= ()=>{
        const name= ref.current.value;
        setChangeCity(name);
        ref.current.value = '';
    };
    const UnixTimestampToDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
      };
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${changeCity}&appid=8764ce2578bf2a80dc49a19393826485`)
    .then (response=>response.json())
    .then(data=>
        setWeatherData({
            name:data.name,
            state:data.weather[0].main,
            temp:data.main.temp,
            currentDate:UnixTimestampToDate(data.dt),
            wind:data.wind.speed,
            humidity:data.main.humidity,
            feels:data.main.feels_like,
            desc:data.weather[0].description,
            iconUrl:"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            min:data.main.temp_min,
            max:data.main.temp_max,
        })
    );
  },[changeCity]);

  return (
    <>
      <div className="container">
        <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-container">
                <h2 className="date-dayname">{weatherData.name}</h2><span className="date-day">{weatherData.currentDate}</span>
                <span className="location">{weatherData.desc}</span>
                <i className="weather-icon" data-feather="sun"><img src={weatherData.iconUrl} alt="" /></i>
            </div>
            <div className="weather-container">
                <h1 className="weather-temp">{Math.floor(weatherData.temp -273.15)}°C</h1>
                <h3 className="weather-desc">{weatherData.state}</h3>
            </div>
        </div>
        <div className="info-side">
            <div className="today-info-container">
                <div className="today-info">
                    <div className="precipitation"> <span className="title">FEELS LIKE</span><span className="value">{Math.floor(weatherData.feels -273.15)}°C</span>
                        <div className="clear"></div>
                    </div>
                    <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{weatherData.humidity}%</span>
                        <div className="clear"></div>
                    </div>
                    <div className="wind"> <span className="title">WIND</span><span className="value">{weatherData.wind} km/h</span>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
            <div className="week-container">
                <ul className="week-list">
                    <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">MIN TEMP</span><span className="day-temp">{Math.floor(weatherData.min -273.15)}°C</span></li>
                    <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">MAX TEMP</span><span className="day-temp">{Math.floor(weatherData.max -273.15)}°C</span></li>
                    
                    <div className="clear"></div>
                </ul>
            </div>
            <div className="location-container">
                <input className='location-search' type="text" placeholder='Find Location' ref={ref}/>
                <button onClick={handleClick} className="location-button"><i><img src="/src/assets/search.png" alt="" /></i></button>
                </div>
        </div>
    </div>
    </>
  )
}

export default App;
