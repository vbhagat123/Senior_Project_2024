import  "./CSS/genderPages.css"
import Item from "../Components/item/item";
import men_products from "../Components/Assets/Mens/men_products"
function Mens() {
  return (
    <div className='shop-category'>
      <div className="shopcategory-products">
        {men_products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
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