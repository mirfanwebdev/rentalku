import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchCarList = createAsyncThunk(
    "cars/fetchCarList",
    async () => {
        try {
            const res = await fetch()
            const data = await res.data.json()
            return data
        }
        catch (error) {
            throw error.message
        }
    }
);

const initialState = {
    carList: [],
}

export const getCarListSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarList.fulfilled, (state, action) => {
            state.carList = action.payload
        })
    }
})

export default getCarListSlice.reducer