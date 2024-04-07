import  "./CSS/ShopCategory.css"
import Item from "../Components/item/item";
import men_banner from '../Components/Assets/banner_mens.png'
import all_product from "../Components/Assets/all_product";

function Mens() {
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={men_banner} alt="" />
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if ("men"=== item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <button>
        Load More
        </button>
      </div>
    </div>
  );
}

export default Mens;