import { useDispatch, useSelector } from "react-redux"
import { Rootstate } from "../redux/store"
import { SearchCar, setCategory, setName, setPrice, setStatus } from "../redux/features/searchCar/searchCarSlice"
import { useNavigate } from "react-router-dom"

const useSearch = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { name, category, price, status } = useSelector((state: Rootstate) => state.search)

    const handleName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch (setName(event.target.value))
    }

    const handleCategory = (value: SearchCar['category']): void => {
        dispatch(setCategory(value))
    }

    const handlePrice = (value: SearchCar['price']): void => {
        dispatch(setPrice(value))
    }

    const handleStatus = (value: SearchCar['status']): void => {
        dispatch(setStatus(value))
    }

    const handleSearch = ({ name, category, price, status }: SearchCar) => {
        const params = new URLSearchParams()

        if (name) params.append('name', name)
        if (category) params.append('category', category)
        if (price) params.append('minPrice', price.toString())
        if (status) params.append('isRented', status.toString())

        navigate(`/car/search?${params.toString()}`)
    }

    return {
        name,
        category,
        price,
        status,
        handleName,
        handleCategory,
        handlePrice,
        handleStatus,
        handleSearch,
    }
}

export default useSearch