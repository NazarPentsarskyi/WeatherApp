import PropTypes from 'prop-types';

function WeatherIcon({ icon }) {
  
  const getIconPath = (icon) => {
    return `../src/assets/${icon}.png`;
  };

  
  return (
    <img className='icon' src={getIconPath(icon)} alt="Погодна іконка" />
  );
}

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default WeatherIcon;