import React, { useState } from 'react'
import mobile from '../images/mobile.png'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteFromCart, updateCart } from '../utils/cartSlice';
import {useDispatch} from 'react-redux';

function CartItem({ productInfo }) {
    // console.log("dsfkl-> ",productInfo);
    const dispatch=useDispatch();
    const { id,name, price, image, productCount,stock } = productInfo;
    console.log(name, price, image, productCount);
    const [itemCount, setItemCount] = useState(productCount);
    const increment = (e) => {
        e.stopPropagation();
        if (itemCount === stock) {
            alert(`Max availability in Stock : ${stock}`)
        } else {
            setItemCount(prevCount => prevCount + 1);
            // console.log("After changing ",itemCount);
            dispatch(updateCart([id,itemCount+1]));
        }
    };

    const decrement = (e) => {
        e.stopPropagation();
        if (itemCount > 1) {
            setItemCount(prevCount => prevCount - 1);
            dispatch(updateCart([id,itemCount-1]));
        }
    };
    
    return (
        <div className='flex flex-row flex-wrap gap-2 justify-between items-center w-full p-3 shadow-lg rounded-md'>
            <div className='flex flex-row items-center gap-2'>
                <img className="h-12 w-12 object-cover" src={image[0].url} alt="error" />
                <div className='flex flex-col gap-1'>
                    <span>{name}</span>
                    <span className='text-xs text-gray-600'>₹ {price}</span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                {/* -------- Add To Cart --------- */}
                <div className='flex flex-row gap-2 items-center text-bold text-xl'>
                    <div className='px-2 py-1 rounded-md bg-gray-300 hover:bg-gray-400 font-bold cursor-pointer' onClick={decrement}>-</div>
                    <span>{itemCount}</span>
                    <div onClick={increment} className='px-2 py-1 rounded-md bg-gray-300 hover:bg-gray-400 font-bold cursor-pointer'>+</div>
                    <FontAwesomeIcon icon={faTrash} className='cursor-pointer ml-4' title='delete' onClick={(e)=>{e.stopPropagation();dispatch(deleteFromCart(id))}}/>
                </div>
                {/* ------------------------------- */}
                <span>₹ {price*itemCount}</span>
            </div>
        </div>
    )
}

export default CartItem