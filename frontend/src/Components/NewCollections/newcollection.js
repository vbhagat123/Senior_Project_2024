import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './newcollection.css'
import new_collections from '../Assets/new_collections'
import Item from '../item/item';

function Collection() {
  return (   
    <div className='new-collections'>
      <h1> Latest Arrivals </h1>
      <hr />
        <div className='collections'>
          {new_collections.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
          })}
        </div>
    </div>
  );
}

export default Collection;