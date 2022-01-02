import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/nav';
import Cart from './Components/Cart';
import Home from './Components/Home/home';

function App() {
  const [cart, setCart] = useState([])
 
  return (
   
    <Router>
      <Nav cart={cart} />
      <Routes>
        <Route exact path='/' element={<Home cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
    
  
  );
}

export default App;
