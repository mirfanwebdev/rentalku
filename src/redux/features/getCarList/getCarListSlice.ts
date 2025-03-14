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
    isLoading: false,
    error: false,
}

export const getCarListSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarList.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCarList.fulfilled, (state, action) => {
            state.carList = action.payload.cars
            state.pageCurrent = action.payload.page
            state.itemTotal = action.payload.count
            state.isLoading = false
        })
        builder.addCase(fetchCarList.rejected, (state) => {
            state.error = true
            state.isLoading = false
        })
    }
})

export default getCarListSlice.reducer