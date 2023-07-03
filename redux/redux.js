
import { configureStore, createSlice } from "@reduxjs/toolkit";
import likeSlice from "./LikeSlice";
import CartSlice from "./CartSlice";

export const {addCart, deleteCart, getCart,emptyCart, supCart} = CartSlice.actions
export const {addLike, deleteLike, getLike,emptyLike, supLike} = likeSlice.actions


export const store  = configureStore({
    reducer: {
        cart : CartSlice.reducer, 
        like:likeSlice.reducer,
    }, 
})

