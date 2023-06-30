import PropTypes from 'prop-types';

function SunsetTime({ sunset }) {

  const sunsetTimeUnixUTC = sunset;
  const sunsetDateUTC = new Date(sunsetTimeUnixUTC * 1000);
  const sunsetTimeLocal = sunsetDateUTC.toLocaleTimeString();

  return (
    <p>{sunsetTimeLocal}</p>
  );
}

SunsetTime.propTypes = {
  sunset: PropTypes.number.isRequired,
};

export default SunsetTime;