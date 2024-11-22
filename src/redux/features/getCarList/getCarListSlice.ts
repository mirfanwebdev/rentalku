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
    currentPage: null,
}

export const getCarListSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarList.fulfilled, (state, action) => {
            state.carList = action.payload.cars
            state.currentPage = action.payload.page
        })
    }
})

export default getCarListSlice.reducer