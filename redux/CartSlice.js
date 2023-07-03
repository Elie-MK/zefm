
import { configureStore, createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cartSlice", 
    initialState : [
        
    ],
      reducers: {
        getCart : (state, action)=>{
            return state
        },
        addCart :(state, action)=>{
            const product = state.find(data=>data.detail.id===action.payload.detail.id)
           if(product){
           product.qte = product.qte + 1
           console.log(state);
           }else{

               state.push(action.payload); 
           }
        },
        supCart :(state, action)=>{
            const product = state.find(data=>data.detail.id===action.payload.detail.id)
           if(product){
           product.qte = product.qte - 1
           console.log(state);
           }else{

               state.push(action.payload); 
           }
        },

        deleteCart : (state, action)=>{
            state = state.filter((id) => id.detail.id !== action.payload);
            return state;
        }, 
        emptyCart : (state, action)=>{
            state = []
            return state;
        }, 
      }, 
}); 

export default CartSlice;