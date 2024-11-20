import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    category: '',
    price: 0,
    status: false,
}

export const searchCarSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        },
    },
})

export const { setName, setCategory, setPrice, setStatus } = searchCarSlice.actions

export default searchCarSlice.reducer