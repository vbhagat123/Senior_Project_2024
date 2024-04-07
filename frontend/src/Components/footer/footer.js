import './footer.css'

function Footer() {
  return (   
    <footer className='footer'>  
        <div className='logo'>
            <p>Threads Inc.</p>
            <hr></hr>
        </div>
        <div className="left-footer">
            <div className='customer-service'>
                <h1> Customer Service</h1>
                <li> Contact us </li>
                <li> Return Policy </li>
                <li> Shipping Information</li>
            </div>
            <div className='about-us'>
                <h1> About Us </h1>
                <li> Careers </li>
                <li> Company Info </li>
                <li> Meet the developers </li>
            </div>
        </div>
        <hr className='separate-responsive'></hr>
        <div class="separate"></div>
        <div className='right-footer'>
            <p> Be the first to hear about the latest deals and more!</p>
            <div className='signup'>
                <input placeholder='Email or Phone Number'></input>
                <button> Sign Up </button>
            </div>
        </div>
    </footer>
  );
}

export default Footer; 