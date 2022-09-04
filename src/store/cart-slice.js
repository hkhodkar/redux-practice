import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalCount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, item) {
            state.totalCount++
            let existingItem = state.items.find(i => i.id === item.payload.id);
            if (existingItem) {
                existingItem.quantity++
            } else {
                state.items.push(item.payload)
            }
        },
        removeItem() { }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;
