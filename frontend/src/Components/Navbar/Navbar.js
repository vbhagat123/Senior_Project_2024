import { Link } from 'react-router-dom';
import './Navbar.css'

function Nav() {
  return (
    <nav>
    <div class="container">
      <ul class="navbar-left">
        <li><a href="/">Home</a></li>
        <li><a href="/kids">Kids</a></li>
        <li ><a href="/Mens">Mens</a></li>
        <li><a href="/Womens">Womens</a></li>
      <ul class="navbar-center">
      <li><a href="/" > Threads </a></li>
      </ul>

      </ul>
      <ul class="login-cart">
        <button><a href="/login">Login</a></button>
        <li><a href="/cart" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">0</span></a></li>
      </ul> 
    </div> 
  </nav>

  
  );
}

export default Nav;