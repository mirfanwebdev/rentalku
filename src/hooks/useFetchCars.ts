import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, Rootstate } from "../redux/store"
import { useEffect } from "react"
import { fetchCarList } from "../redux/features/getCarList/getCarListSlice"
import { useNavigate } from "react-router-dom"

const useFetchCars = (params: string) => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const { carList, pageCurrent, itemTotal } = useSelector((state: Rootstate) => state.cars)

    useEffect(() => {
        dispatch(fetchCarList(params))
    }, [dispatch, params])

    const handlePage = (page: number) => {
        const query = new URLSearchParams(params)
        query.set('page', page.toString())
        navigate(`/car/search?${query.toString()}`)
    }

    return {
        carList,
        current: pageCurrent,
        total: itemTotal,
        handlePage,
    }
}

export default useFetchCars