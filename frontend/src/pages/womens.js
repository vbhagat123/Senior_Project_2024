import  "./CSS/genderPages.css"
import Item from "../Components/item/item";
import women_products from "../Components/Assets/women/women_products"
function Womens() {
  return (
    <div className='shop-category'>
      <div className="shopcategory-products">
      {women_products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
        })}
      </div>
      <div className="shopcategory-loadmore">
        <button className="shopcategory-loadmore">
        Load More
        </button>
      </div>
    </div>
  );
}

export default Womens;