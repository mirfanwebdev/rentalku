import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carAPI } from "../../../api/carAPI";


const fetchCarList = createAsyncThunk(
    "cars/fetchCars",
    async () => {
        try {
            const response = await carAPI.getCarList()
            return response.json()
        } catch (error) {
            console.log(error)
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
            state.carList = action.payload.data
        })
    }
})

export default getCarListSlice.reducer