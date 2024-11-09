// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar></Navbar>
        <Slider></Slider>
        <ProductsList></ProductsList>
      </div>
    </div>
  );
}

export default App;
