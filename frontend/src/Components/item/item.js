import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './item.css'

function Item(props) {
  return (   
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item_prices">
            <div className="prices">
                ${props.new_price}
            </div>
        </div>
    </div>
  );
}

export default Item;