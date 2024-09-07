import Hero from "../../component/Hero"
import Navbar from "../../component/Navbar"
import Footer from "../../component/Footer"
import './index.scss'
import SectionOurServices from "./SectionOurServices"
import SectionWhyUs from "./SectionWhyUs"
import { Button } from "antd"

const Banner = () => {
    return (
        <div id="banner">
            <h1>Sewa Mobil di Bandung Sekarang</h1>
            <p>
                Perjalanan jadi lebih mudah dengan mobil sewaan kami.
                Pesan sekarang, dapatkan kenyamanan maksimal!
            </p>
            <Button>Mulai Sewa Mobil</Button>
        </div>
    )
}

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
            <section id="whyus">
                <SectionWhyUs/>
            </section>
            <Banner/>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default LandingPage