import React from 'react';
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";


function App() {

  return (
    <div className="App">
      <div className="container">
      <div className="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
       <Weather />
        <Footer />
      </div>
      </div>
    </div>
  );
}


export default App;
