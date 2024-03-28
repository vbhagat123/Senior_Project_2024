import './App.css';
import Navbar from './Components/Navbar/NavBar.js'
import Footer from './Components/footer/footer';
import {HashRouter, BrowserRouter,Routes,Route } from 'react-router-dom';

import Mens from './pages/mens.js'
import Womens from './pages/womens.js'
import Kids from './pages/kids.js'
import Shop from './pages/shop';
import Cart from './pages/cart';
import Product from './pages/product'
import Collection from './Components/NewCollections/newcollection';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path = "/newcollections" element={<Collection/>}/>
        <Route path='/Mens' element={<Mens/>}/>
        <Route path='/Womens' element={<Womens banner={women_banner} />}/>
        <Route path='/Kids' element={<Kids banner={kid_banner} />}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>  
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<loginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
