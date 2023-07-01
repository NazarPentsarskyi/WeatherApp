import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
//import HourlyPage from './pages/hourlyPage';
// import { ErrorPage } from './pages/ErrorPage';


function App() {

  return (
    <>
      <HomePage />
      

      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hourly" element={<HourlyPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App;
