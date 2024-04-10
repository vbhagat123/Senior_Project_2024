import  "./CSS/genderPages.css"
import Item from "../Components/item/item";
import kids_products from "../Components/Assets/Kids/kids_products"

function Kids() {
  return (
    <div className='shop-category'>
      <div className="shopcategory-products">
        {kids_products.map((item,i)=>{
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

export default Kids;