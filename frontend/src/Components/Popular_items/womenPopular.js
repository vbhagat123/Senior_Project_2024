import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './womenPopular.css'
import data_product from '../Assets/data'
import Item from '../item/item';


function Women() {
  return (   
    <div className='popular'>
        <h1> Popular In Women</h1>
        <div className='top-stuff'>
            <li> 
                {data_product.map((item,i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
                })}
            </li>
        </div>
    </div>
  );
}

export default Women; 