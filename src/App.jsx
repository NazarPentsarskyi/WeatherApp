import { useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherIcon from './components/WeatherIcon';
import SunriseTime from './components/SunriseTime';
import SunsetTime from './components/SunsetTime';


function App() {

  const [data, setData] = useState({});
  const [town, setTown] = useState('');

  const key = '8fbb5089d94d3c0351c4e1f1e27786e1';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

  const searchWeather = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setTown('');
    }
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='title'>
          <img src='src/assets/weather-app.png'/>
          <h1>Weather App</h1>
          </div>
          <input className='input'
            type='text' 
            value={town} 
            onChange={(event)=> setTown(event.target.value)}
            placeholder='Enter location'
            onKeyDown={searchWeather}
          />
        </div>
        
        <div className='main'>
          {data.main ? (
          <>
            <div className='location'>
              <h4>{`${data.name}, `}</h4>
              {data.main ? (<h4>{data.sys.country}</h4>) : null}
            </div>
            <div className='temperature'>
              {data.main ? (<h2>{data.main.temp.toFixed()}°C</h2>) : null}
              <div className='feels_like'>
                {data.main ? (<>
                  <h3>{data.main.feels_like.toFixed()}°C</h3>
                  <span>feels like</span>
                </>) : null}
              </div>
            </div>
            <div>
              {data.weather ? 
                <div className='description'>
                  <p>{data.weather[0].main}</p>
                  <WeatherIcon icon={data.weather[0].icon} />
                </div>
                : null}
            </div>
            <div className="other">
              <div className='pressure'>
                {data.main ? (<>
                  <h4>{`${data.main.pressure} `}hPa</h4>
                  <p>pressure</p>
                </>) : null}
              </div>
              <div className='humidity'>
                {data.main ? (<>
                  <h4>{`${data.main.humidity} `}%</h4>
                  <p>humidity</p>
                </>) : null}
              </div>
              <div className='wind'>
                {data.main ? (<>
                  <h4>{`${data.wind.speed} `}m/s</h4>
                  <p>wind</p>
                </>) : null}
              </div>
            </div>
            <div className='sunTime'>
              {data.main ? (<>
                <p>Sunrise</p>
                <SunriseTime sunrise={data.sys.sunrise} />
              </>) : null}
              <p>|</p>
              {data.main ? (<>
                <p>Sunset</p>
                <SunsetTime sunset={data.sys.sunset} />
              </>) : null}
            </div>
          </>
          ) : null }
        </div>
        <div className='footer'>
          creation by <a href='https://github.com/NazarPentsarskyi'>dcool</a>
        </div>
      </div>
    </>
  )
}

export default App;
