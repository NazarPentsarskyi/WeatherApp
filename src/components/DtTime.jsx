import PropTypes from 'prop-types';

function DtTime({ dt }) {

  const dtTimeUnixUTC = dt;
  const dtDateUTC = new Date(dtTimeUnixUTC * 1000);
  const dtTimeLocal = dtDateUTC.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <p>{dtTimeLocal}</p>
  );
}

DtTime.propTypes = {
  dt: PropTypes.number.isRequired,
};

export default DtTime;