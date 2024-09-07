import Hero from "../../component/Hero"
import Navbar from "../../component/Navbar"
import Footer from "../../component/Footer"
import './index.scss'
import SectionOurServices from "./SectionOurServices"
import SectionWhyUs from "./SectionWhyUs"

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
            <section>
                <SectionWhyUs/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default LandingPage