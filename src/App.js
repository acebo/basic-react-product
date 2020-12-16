import React, { useState } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Product from './pages/Product'
import Cart from './pages/Cart'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/products" component={() => <Product cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/cart" component={() => <Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/" component={() => <Product cartItems={cartItems} setCartItems={setCartItems} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
