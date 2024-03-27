import Hero from '../Components/Hero/Hero';
import Women from '../Components/Popular_items/womenPopular';
import Collection from '../Components/NewCollections/newcollection';

function Shop() {
  return (
    <div className='shop'>
        <Hero/>
        <Women/>
        <Collection />
    </div>
  );
}

export default Shop;