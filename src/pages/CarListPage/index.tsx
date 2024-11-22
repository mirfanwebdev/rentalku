import { useLocation } from "react-router-dom"
import Footer from "../../component/Footer"
import Header from "../../component/Header"
import SearchBox from "../../component/SearchBox"
import useFetchCars from "../../hooks/useFetchCars"
import ContainerList from "./ContainerList"
import "./index.scss"

const CarListPage = () => {
    const location = useLocation()
    const { carList } = useFetchCars(location.search)
    return (
        <>
            <Header />
            <main>
                <SearchBox />
                <ContainerList cars={carList} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CarListPage