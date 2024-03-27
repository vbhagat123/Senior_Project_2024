import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Hero.css'
import arrow_icon from '../Assets/right-arrow.png'
import hero_image from '../Assets/hero.png'

function Hero() {
  return (   
    <div className='hero'>
        <div className='hero-left'>
            <div>
                <p>New Summer</p>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div>
                <button className="hero-latest-button"><a href="/Senior_Project_2024/newCollections">Latest Collection</a><img src={arrow_icon} alt="" /></button>
            </div>
        </div>
        <div className="hero-right">
        <img src={hero_image} alt="" />
        </div>
    </div>
  );
}

export default Hero;