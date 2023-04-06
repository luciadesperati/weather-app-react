import './App.css';

import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <div className="col-4-lg col-4-md offset-3-lg offset-3-md">
        <Search />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}


export default App;
