import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Hero from "../../component/Hero";
import SearchBox from "../../component/SearchBox";
import './index.scss'

const SearchPage = () => {
    return (
        <>
            <Header>
                <Hero/>
            </Header>
            <main>
                <SearchBox/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default SearchPage;