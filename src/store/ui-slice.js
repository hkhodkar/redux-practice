import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    toggleCart: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.toggleCart = !state.toggleCart
        },
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;



