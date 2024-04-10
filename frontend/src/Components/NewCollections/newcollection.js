import './newcollection.css'
import latest_arrival from '../Assets/New_Arrivals/latest_arrival'
import Item from '../item/item';

function NewCollection() {
  return (   
    <div className='new'>
      <h1> Latest Arrivals </h1>
      <hr/>
        <div className='collections'>
          {latest_arrival.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
          })}
        </div>
    </div>
  );
}

export default NewCollection;