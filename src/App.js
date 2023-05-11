import React, { useState } from 'react';
import './App.css';
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";


function App() {
  const [cityName, setCityName] = useState(null);

  const handleFormSubmit = (formData) => {
    setCityName(formData);
  };

  return (
    <div className="App">
      <div className="container">
      <div className="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <Search onFormSubmit={handleFormSubmit}/>
        {cityName && <Weather cityName={cityName} />}
        <Footer cityName={cityName}/>
      </div>
      </div>
    </div>
  );
}


export default App;
