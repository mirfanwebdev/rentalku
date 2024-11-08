import Footer from "../../component/Footer"
import Header from "../../component/Header"
import SearchBox from "../../component/SearchBox"
import ContainerList from "./ContainerList"
import "./index.scss"

const CarListPage = () => {
    return (
        <>
            <Header />
            <main>
                <SearchBox />
                <ContainerList />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CarListPage