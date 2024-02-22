import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, updateCart } from '../utils/cartSlice';

function SingleProduct() {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get('id');
  const [productInfo, setProductInfo] = useState(null)
  const cnt = cartItems.hasOwnProperty(id) ? cartItems[id]["productCount"] : 1;
  const [productCount, setProductCount] = useState(cnt);
  const [loading, setLoading] = useState(!cartItems.hasOwnProperty(id));
  const getProductData = async (id) => {
    const data = await fetch(`https://api.pujakaitem.com/api/products?id=${id}`);
    const json = await data.json();
    setLoading(false);
    setProductInfo(json);
    console.log("API called");
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
    if (id && !cartItems.hasOwnProperty(id)) {
      getProductData(id);
    }
  }, [id]);
  if (loading === true) {
    return <div>Loading...</div>
  }
  const { name, price, company, description, image, category,stock } = cartItems.hasOwnProperty(id) ? cartItems[id] : productInfo;
  const addItemsToCart = () => {
    if (cartItems.hasOwnProperty(id)) { // Update
      dispatch(updateCart([id, productCount]));
    } else { // Add
      productInfo["productCount"] = productCount;
      dispatch(addToCart([id, productInfo]));
    }
  }
  const increment = () => {
    if (productCount === stock) {
      alert(`Max availability in Stock : ${stock}`)
    } else {
      setProductCount(prevCount => prevCount + 1);
    }
  };

  const decrement = () => {
    if (productCount > 1) {
      setProductCount(prevCount => prevCount - 1);
    }
  };
  return (
    <div className='flex flex-row gap-10 justify-center items-center flex-wrap'>
      <img className="max-w-[500px] w-full" src={image[0].url} alt="error" />
      <div className='flex flex-col gap-4 items-start max-w-[450px] p-2 md:p-0'>
        <span className='text-2xl'>{name}</span>
        <span>MRP : <b>₹{price}</b></span>
        <span>{description}</span>
        <span>Id :  <b>{id}</b></span>
        <span>Brand :  <b>{company}</b></span>
        <span>Category :  <b>{category}</b></span>
        <div className='flex flex-row gap-2 items-center text-bold text-xl'>
          <div className='px-2 py-1 rounded-md bg-gray-300 hover:bg-gray-400 font-bold cursor-pointer' onClick={decrement}>-</div>
          <span>{productCount}</span>
          <div onClick={increment} className='px-2 py-1 rounded-md bg-gray-300 hover:bg-gray-400 font-bold cursor-pointer'>+</div>
        </div>
        <Link to="/cart"><button className='p-2 rounded-md text-white font-semibold bg-blue-500 hover:bg-blue-600' onClick={addItemsToCart}>ADD TO CART</button></Link>
      </div>
    </div>
  )
}

export default SingleProduct