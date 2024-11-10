// import logo from './logo.svg';
// import './App.css';

import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <>
            <Slider></Slider>
            <ProductsList></ProductsList>
          </>
        }></Route>

        <Route path="about" element={<About></About>}></Route>
        <Route path="product/:productId" element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
