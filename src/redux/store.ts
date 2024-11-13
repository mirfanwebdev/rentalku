import { configureStore } from "@reduxjs/toolkit";
import getCarByIdReducer from "./features/getCarById/getCarByIdSlice"
import getCarListReducer from "./features/getCarList/getCarListSlice"


export const store = configureStore({
    reducer: {
        car: getCarByIdReducer
        cars: getCarListReducer
    },
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch