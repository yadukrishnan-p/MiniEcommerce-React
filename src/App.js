
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import { useState } from 'react';
import  {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart';
function App() {

  const [cartItems , setCartItems] = useState([])
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position="top-center"/>
          <Header cartItems = {cartItems}/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetails cartItems = {cartItems} setCartItems = {setCartItems}/>} />
            <Route path="/cart" element={<Cart cartItems = {cartItems} setCartItems = {setCartItems}/>} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
