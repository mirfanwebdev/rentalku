import { configureStore } from "@reduxjs/toolkit";
import getCarByIdReducer from "./features/getCarById/getCarByIdSlice"
import getCarListReducer from "./features/getCarList/getCarListSlice"
import searchCarReducer from "./features/searchCar/searchCarSlice"


export const store = configureStore({
    reducer: {
        car: getCarByIdReducer,
        cars: getCarListReducer,
        search: searchCarReducer,
    },
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch