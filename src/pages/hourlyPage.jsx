import { useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import WeatherIcon from '../components/WeatherIcon';
import DtTime from '../components/DtTime';
import PropTypes from 'prop-types';


  function HourlyPage() {

  const [data, setData] = useState({});
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const town = searchParams.get('town')

  useEffect(() => {
    const key = '8fbb5089d94d3c0351c4e1f1e27786e1';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${town}&units=metric&appid=${key}`;
  
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    },[town]);

  return (
    <>
      <div className='container'>
        <Link to={`/`} className='back'><button className='button'>...back</button></Link>
        <div className='main'>
          {data.cod ? (
            <>
              <div className='location'>
                <h3>5 day weather forecast</h3>
                <h4>{`${data.city.name}, `}</h4>
                {data.cod ? (<h4>{data.city.country}</h4>) : null}
              </div>
              <div className='fiveDays'>
                {data.cod ? (
                  <ul>{data.list.map((item, index) => (<li key={index}>
                    <DtTime dt={item.dt} />
                    <h2>{item.main.temp.toFixed()}°C</h2>
                    <div>
                      <p>feels</p>
                      <h3> {item.main.feels_like.toFixed()}°C</h3>
                    </div>
                    <WeatherIcon icon={item.weather[0].icon} />
                    <h4>{item.weather[0].description}</h4>
                    <div className='otherDays'>
                      <h4>{item.main.pressure}hPa</h4>
                      <h4>{item.main.humidity}%</h4>
                      <h4>{item.wind.speed}m/s</h4>
                    </div>
                  </li>
                  ))}
                  </ul>
                ) : null}  
             </div>
            </> 
          ) : null }
        </div>
      </div>
    </>
  )
}

 HourlyPage.propTypes = {
  town: PropTypes.string,
}; 

export default HourlyPage;
