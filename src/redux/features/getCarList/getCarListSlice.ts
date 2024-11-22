import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carAPI } from "../../../api/carAPI";


export const fetchCarList = createAsyncThunk(
    "cars/fetchCars",
    async (params: string) => {
        const response = await carAPI.getCarList(params)
        return response.json()
    }
);

const initialState = {
    carList: [],
    pageCurrent: 0,
    itemTotal: 0,
}

export const getCarListSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarList.fulfilled, (state, action) => {
            state.carList = action.payload.cars
            state.pageCurrent = action.payload.page
            state.itemTotal = action.payload.count
        })
    }
})

export default getCarListSlice.reducer