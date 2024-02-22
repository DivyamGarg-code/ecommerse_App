import React,{useState,useEffect} from 'react'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

function Products() {
  const [loading,setLoading]=useState(false);
  const getProducts=async ()=>{
    const data=await fetch("https://api.pujakaitem.com/api/products");
    const json=await data.json();
    setLoading(true);
    setProductList(json);
    console.log(json);
  }
  const [productList, setProductList] = useState(null);
  useEffect(()=>{
    getProducts();
  },[])
  if(productList===null){
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col items-center gap-6'>
      <span className='text-2xl font-semibold'>Products</span>
      <div className='flex flex-wrap flex-row gap-4 items-center justify-center'>
        {productList.map((productInfo)=>{
          return <Link key={productInfo.id} to={`/singleProduct?id=${productInfo.id}`}><ProductItem productInfo={productInfo}/></Link>
        })}
      </div>
    </div>
  )
}

export default Products