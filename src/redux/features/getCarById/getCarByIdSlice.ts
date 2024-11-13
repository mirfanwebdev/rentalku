import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carAPI } from "../../../api/carAPI";

const fetchCarById = createAsyncThunk(
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

interface CarDetail {
    id: number,
    namde: string,
    category: string,
    price: number,
    status: boolean,
    image: string,
    start_rent_at: string,
    end_rent_at: string,
    createAt: string,
    updateAt: string
}

const initialState = {
    carById: {} as CarDetail
}

export const getCarByIdSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarById.fulfilled, (state, action) => {
            state.carById = action.payload.data
        })
    }
})

export default getCarByIdSlice.reducer