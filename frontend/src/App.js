import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/footer/footer';
import {HashRouter, BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/shop';
import cart from './pages/cart';
import product from './pages/product';
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
        <Route path='/Mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/Womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/Kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<product/>}>
          <Route path=':productId' element={<product/>}/>  
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginSignup/>}/>
        <Route path = "/newcollections" element={<Collection/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
