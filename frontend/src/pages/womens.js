import  "./CSS/ShopCategory.css"
import Item from "../Components/item/item";
import women_banner from '../Components/Assets/banner_women.png'
import all_product from "../Components/Assets/all_product";

function Womens() {
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={women_banner} alt="" />
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if ("women"=== item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
          }
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