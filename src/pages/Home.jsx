import Card from "../components/productCard";
import PRODUCTS from "../components/Products";
import "./home.css";
function Home() {
    return (
    <>
        <div className="products">
            {PRODUCTS.map((products) => {return(<Card Data = {products} />);})}
        </div>
    </>
    )
  }
  
  export default Home;