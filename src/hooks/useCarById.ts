import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, Rootstate } from "../redux/store"
import { useEffect } from "react"
import { fetchCarById } from "../redux/features/getCarById/getCarByIdSlice"

const useCarById = (id: number) => {
    const dispatch: AppDispatch = useDispatch()
    const { carById } = useSelector((state: Rootstate) => state.car)

    useEffect(() => {
        dispatch(fetchCarById(id))
    }, [dispatch, id])

    return {
        carById
    }
}

export default useCarById