
export const ErrorPage = () => {

  const handleReloadClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className='container'>
        <img className='icon reload'
          src={'../src/assets/reload.png'}
          alt="reload image"
          onClick={handleReloadClick}/>
        <div className='error'>
          <h2>Oops!</h2>
          <h4>500 (Internal Server Error)</h4>
          <p>
            This page does not exist!
          </p>
          <img className='icon' src={'../src/assets/error.png'} alt="Error image" />
        </div>
      </div>
    </>
  )
}