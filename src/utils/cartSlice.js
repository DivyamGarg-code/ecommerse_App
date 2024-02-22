import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems:{},
        totalItemCount:0,
        totalAmount:0,
    },
    reducers: {
        addToCart: (state, action) => {
            const [key, value] = action.payload;
            state.cartItems[key] = value;
            state.totalItemCount+=state.cartItems[key]["productCount"];
            state.totalAmount+=(state.cartItems[key]["productCount"]*state.cartItems[key]["price"]);
        },
        deleteFromCart: (state, action) => {
            const key = action.payload;
            state.totalItemCount-=state.cartItems[key]["productCount"];
            state.totalAmount-=(state.cartItems[key]["productCount"]*state.cartItems[key]["price"]);
            delete state.cartItems[key];
        },
        updateCart: (state, action) => {
            const [key, value] = action.payload;
            // First delete the existing count
            state.totalItemCount-=state.cartItems[key]["productCount"];
            state.totalAmount-=(state.cartItems[key]["productCount"]*state.cartItems[key]["price"]);
            state.cartItems[key]["productCount"] = value;
            // Now add the updated count
            state.totalItemCount+=state.cartItems[key]["productCount"];
            state.totalAmount+=(state.cartItems[key]["productCount"]*state.cartItems[key]["price"]);

        },
        clearCart: (state, action) => {
            Object.keys(state.cartItems).forEach(key => {
                delete state.cartItems[key];
            });
            state.totalItemCount=0;
            state.totalAmount=0;
        }
    }
});

export const { addToCart, deleteFromCart, updateCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
