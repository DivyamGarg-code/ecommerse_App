import React from 'react'

function ProductItem({productInfo}) {
    const { image, name, price, currency, category } = productInfo;
    return (
        <div className='flex flex-col gap-2 items-center p-4 rounded-md shadow-lg relative cursor-pointer hover:scale-105 transition-transform duration-300'>
            <div className='bg-gray-100 px-3 py-1 rounded-lg shadow-lg text-black absolute top-5 right-5 text-[12px]'>{category}</div>
            <img className="w-[250px] h-[160px] rounded-md" src={image} alt="error" />
            <div className='flex flex-row items-center justify-between w-full'>
                <span>{name}</span>
                <span>₹ {price}</span>
            </div>
        </div>
    );
}

export default ProductItem