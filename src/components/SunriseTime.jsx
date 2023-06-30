import PropTypes from 'prop-types';

function SunriseTime({ sunrise }) {

  const sunriseTimeUnixUTC = sunrise;
  const sunriseDateUTC = new Date(sunriseTimeUnixUTC * 1000);
  const sunriseTimeLocal = sunriseDateUTC.toLocaleTimeString();

  return (
    <p>{sunriseTimeLocal}</p>
  );
}

SunriseTime.propTypes = {
  sunrise: PropTypes.number.isRequired,
};

export default SunriseTime;