import { useLocation } from "react-router-dom"
import Footer from "../../component/Footer"
import Header from "../../component/Header"
import SearchBox from "../../component/SearchBox"
import useFetchCars from "../../hooks/useFetchCars"
import ContainerList from "./ContainerList"
import "./index.scss"

const CarListPage = () => {
    const location = useLocation()
    const { carList, current, total, error, isLoading, handlePage } = useFetchCars(location.search)
    return (
        <>
            <Header />
            <main>
                <SearchBox />
                <ContainerList cars={carList} current={current} total={total} error={error} isLoading={isLoading} handlePage={handlePage} />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CarListPage