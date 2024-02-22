import React from 'react'
import mobile from '../images/mobile.png'
import accessories from '../images/accessories.png'
import watch from '../images/watch.png'
import {Link} from 'react-router-dom'
import ProductItem from './ProductItem'

function FeatureProducts() {
    const featureProducts = [
        {
            id:"thapaserialnoa",
            image: mobile,
            name: "Iphone X",
            price: 60000.00,
            currency: "₹",
            category: "mobile",
        },
        {
            id:"thapaserialnoh",
            image: accessories,
            name: "Accessories",
            price: 1099999,
            currency: "₹",
            category: "accessories",
        },
        {
            id:"thapaserialnol",
            image: watch,
            name: "Galaxy W20",
            price: 311999,
            currency: "₹",
            category: "watch",
        }
    ]
    return (
        <div className='flex flex-col items-center gap-8 bg-gray-100 w-full py-10'>
            <div className='flex  flex-col items-center max-w-[890px] w-fit md:items-start md:w-full'>
                <span>Check Now!</span>
                <span className='font-bold text-2xl'>Our Feature Services</span>
            </div>
            <div className='flex flex-row items-center justify-center gap-6 flex-wrap'>
                {featureProducts.map((productInfo,index)=>{
                    return <Link key={productInfo.id} to={`/singleProduct?id=${productInfo.id}`}><ProductItem productInfo={productInfo}/></Link>
                })}
            </div>
        </div>
    )
}

export default FeatureProducts


// const Product = ({ productInfo }) => {  
//     const { image, name, price, currency, category } = productInfo;
//     return (
//         <div className='flex flex-col gap-2 items-center p-4 rounded-md shadow-lg relative cursor-pointer hover:scale-105 transition-transform duration-300'>
//             <div className='bg-gray-100 px-3 py-1 rounded-lg shadow-lg text-black absolute top-5 right-5 text-[12px]'>{category}</div>
//             <img className="w-[250px] h-[160px] rounded-md" src={image} alt="error" />
//             <div className='flex flex-row items-center justify-between w-full'>
//                 <span>{name}</span>
//                 <span>{currency + " " + price}</span>
//             </div>
//         </div>
//     );
// }