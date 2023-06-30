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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=${key}`

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
      <div className="container">

        <h1>Weather App</h1>
      
        <input type='text' 
          value={town} 
          onChange={(event)=> setTown(event.target.value)}
          placeholder='Enter location'
          onKeyDown={searchWeather}
        />

        <div className="location">
          <h3>{data.name}</h3>
        </div>
        
        <div className="temperature">

          {data.main ? (
            <h2>
              {data.main.temp.toFixed()}
              °C
            </h2>
          ) : null}
          

        </div>

        <div className="feels_like">
          {data.main ? (<>
            <p>feels like </p>
            <h3>
              {data.main.feels_like.toFixed()}
              °C
            </h3>
            </>
          ) : null}

        </div>

        <div className="pressure">
          {data.main ? (<>
            <p>pressure </p>
            <h3>
              {data.main.pressure}
              hPa
            </h3>
            </>
          ) : null}

        </div>

        <div className="humidity">
          {data.main ? (<>
            <p>humidity </p>
            <h3>
              {data.main.humidity}
              %
            </h3>
            </>
          ) : null}

        </div>

        <div className="wind">
          {data.main ? (<>
            <p>wind </p>
            <h3>
              {data.wind.speed}
              meter/sec
            </h3>
            </>
          ) : null}

        </div>
        <div className="sys">
          {data.main ? (<>
            <h3>
              {data.sys.country}
            </h3>
            </>
          ) : null}
        </div>

 




        <div className="sys">
          {data.main ? (<>
            
            <SunriseTime sunrise={data.sys.sunrise} />
            </>
          ) : null}
        </div>
        <div className="sys">
          {data.main ? (<>
            
            <SunsetTime sunset={data.sys.sunset} />
            </>
          ) : null}
        </div>

        <div className="desc">
          {data.weather ? <div><p>{data.weather[0].main}</p><WeatherIcon icon={data.weather[0].icon} /></div> : null}
        </div>
      </div>

      
    </>
  )
}

export default App;
