import Hero from "../../component/Hero"
import Navbar from "../../component/Navbar"
import Footer from "../../component/Footer"
import './index.scss'
import SectionOurServices from "./SectionOurServices"

const LandingPage = () => {
    return (
        <>
            {/* <Header /> */}
            <header>
                <nav>
                    <Navbar />
                </nav>
                <Hero/>
            </header>
            <section>
                <SectionOurServices/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default LandingPage