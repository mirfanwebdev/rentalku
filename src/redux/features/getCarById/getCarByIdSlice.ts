import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carAPI } from "../../../api/carAPI";
import CarDetail from "../../../interface/carDetail";

export const fetchCarById = createAsyncThunk(
    'car/fetchCarById',
    async (id: number) => {
        try {
            const response = await carAPI.getCarById(id)
            return response.json()
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState = {
    carById: {} as CarDetail
}

export const getCarByIdSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarById.fulfilled, (state, action) => {
            state.carById = action.payload
        })
    }
})

export default getCarByIdSlice.reducer