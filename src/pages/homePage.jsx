import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import WeatherIcon from '../components/WeatherIcon';
import SunriseTime from '../components/SunriseTime';
import SunsetTime from '../components/SunsetTime';
import { ErrorPage } from './ErrorPage';


function HomePage() {

  const [data, setData] = useState({});
  const [town, setTown] = useState('');
  const [searchedTown, setSearchedTown] = useState('');
  const [error, setError] = useState(false);

  const key = '8fbb5089d94d3c0351c4e1f1e27786e1';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedTown}&units=metric&appid=${key}`;

  const searchWeather = (event) => {
    if(event.key === 'Enter'){

      setSearchedTown(town);
      url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`;

      axios
        .get(url)
        .then((response) => {
          if (response.data.cod && response.data.cod !== 200) {
            setError(true);
          } else {
            setData(response.data);
            setTown('');
            setError(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError(true);
        });
    }
  };

  const handleLogoClick = () => {
    window.location.reload();
  };
  
  return (
    <>
    {error ? (
      <ErrorPage />
    ) : (
      <div className='container'>
        <div className='header'>
          <div className='title' onClick={handleLogoClick}>
          <img src='src/assets/weather-app.png'/>
          <h1>Weather App</h1>
          </div>
          {data.main ? (
            <input className='input'
              type='text' 
              value={town} 
              onChange={(event)=> setTown(event.target.value)}
              placeholder='Enter location'
              onKeyDown={searchWeather}
            />
          ) : null }
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
            <Link to={`/hourly?town=${encodeURIComponent(searchedTown)}`}><button className="button">5 day weather forecast</button></Link>
          </>
          ) : (
          <input className='inputCenter'
            type='text' 
            value={town} 
            onChange={(event)=> setTown(event.target.value)}
            placeholder='Enter location'
            onKeyDown={searchWeather}
          /> 
        )}
        </div>
        
        <div className='footer'>
          creation by <a href='https://github.com/NazarPentsarskyi'>dcool</a>
        </div>
      </div>
      )}
    </>
  );
}

export default HomePage;
