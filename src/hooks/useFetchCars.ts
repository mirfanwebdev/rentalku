import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, Rootstate } from "../redux/store"
import { useEffect } from "react"
import { fetchCarList } from "../redux/features/getCarList/getCarListSlice"

const useFetchCars = (params: string) => {
    const dispatch: AppDispatch = useDispatch()
    const { carList } = useSelector((state: Rootstate) => state.cars)

    useEffect(() => {
        dispatch(fetchCarList(params))
    }, [dispatch, params])

    return {
        carList
    }
}

export default useFetchCars