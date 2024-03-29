import './App.css';
import Navbar from './Components/Navbar/NavBar.js'
import Footer from './Components/footer/footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mens from './pages/mens.js'
import Womens from './pages/womens.js'
import Kids from './pages/kids.js'
import Shop from './pages/shop';
import Cart from './pages/cart';
import Product from './pages/product'
import NewCollection from './Components/NewCollections/newcollection.js';
import Login from './pages/login.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path = "/NewCollection" element={<NewCollection/>}/>
        <Route path='/Mens' element={<Mens/>}/>
        <Route path='/Womens' element={<Womens />}/>
        <Route path='/Kids' element={<Kids  />}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>  
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
