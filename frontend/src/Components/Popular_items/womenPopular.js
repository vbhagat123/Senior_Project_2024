import './womenPopular.css'
import popular from '../Assets/popular/women_popular_products'
import Item from '../item/item';


function Women() {
  return (   
    <div className='popular'>
        <h1> Popular In Women</h1>
        <hr />
        <div className='top-stuff'>
          {popular.map((item,i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
          })}
        </div>
    </div>
  );
}

export default Women; 