import { useContext } from "react"
import  "./CSS/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/item/item";
import men_banner from '../Components/Assets/banner_mens.png'

function Mens() {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={men_banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if ("men"=== item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Load More
      </div>
    </div>
  );
}

export default Mens;