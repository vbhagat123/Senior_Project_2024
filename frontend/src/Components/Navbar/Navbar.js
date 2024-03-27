import { Link } from 'react-router-dom';
import './Navbar.css'

function Nav() {
  return (
    <nav>
    <div class="container">
      <ul class="navbar-left">
        <li><a href="/Senior_Project_2024/">Home</a></li>
        <li><a href="/Senior_Project_2024/Kids">Kids</a></li>
        <li ><a href="/Senior_Project_2024/Mens">Mens</a></li>
        <li><a href="/Senior_Project_2024/Womens">Womens</a></li>
      <ul class="navbar-center">
      <li><a href="/Senior_Project_2024/" > Threads </a></li>
      </ul>

      </ul>
      <ul class="login-cart">
        <button><a href="/Senior_Project_2024/login">Login</a></button>
        <li><a href="/Senior_Project_2024/cart" id="cart"><i class="fa fa-shopping-cart"></i> Cart <span class="badge">0</span></a></li>
      </ul> 
    </div> 
  </nav>

  
  );
}

export default Nav;