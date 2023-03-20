import React,{useState,useEffect} from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Product = () => {

    const [items, setItems] = useState([]);
    const [product, setProduct] = useState([{}]);

    const categories = "https://fakestoreapi.com/products/categories";

    const fetchCategories = async (categories) => {
        try{
            const res = await fetch(categories);
            const data = await res.json();
            if(data.length > 0){
                setItems(data);
            }
            console.log(data);
        }catch (err){
            console.log(err);
        }
    }

 useEffect(() => {
    fetchCategories(categories);
 },[])


const productDetails = "https://fakestoreapi.com/products/category/electronics";
const fetchProductDetails = async(productDetails) => {
     try{
        const res = await fetch(productDetails);
        const data = await res.json();
        setProduct(data);
        console.log(data);
     }catch(err){
        console.log(err);
     }
}

 useEffect( ()=>{
   fetchProductDetails(productDetails);
 },[])

    return(
      <>
        <Nav />
        <div class="product-container"> 
<div className="product-name-card">
        <Link className="product" to='/product'>
{items.map((itemNames,i)=>{
    // const [name] = e;
    return(
        <div>
        <p key={i} >{itemNames}</p>
      
        {/* {console.log(e)} */}
        </div>
    )
})}
</Link>
</div>


<div className="product-detail-card">

    <Link className="product-detail" to='/productdetails'>
    {product.map((itemDetails) => {

        return (
            <div key={itemDetails.id}>        
                <li>{itemDetails.title}</li>
               <ProductDetails productinfo={itemDetails}/>
                {/* <p>{e.description}</p> */}
                {/* {console.log(e.title)}
                {console.log(e.description)} */}
                </div>

                // {e.rating && e.rating.map((data)=>{
                //     return(
                //         <div key={e.id}>
                //         {data.rate}
                //         </div>
                //     )
                // })}
        )
    })}
    </Link>
</div>

        </div>
        </>
    )
}

export default Product;