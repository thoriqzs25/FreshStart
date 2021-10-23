import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    intialState: { 
        item: [],
        totalQuantity: 0
    },
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.item.find(item => item.id === newItem.id);
            if(!existingItem) {
                state.item.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;