import Hero from "../../component/Hero"
import Navbar from "../../component/Navbar"
import Footer from "../../component/Footer"
import './index.scss'
import SectionOurServices from "./SectionOurServices"
import SectionWhyUs from "./SectionWhyUs"
import { Button } from "antd"
import SectionFaq from "./SectionFaq"
import SectionTestimonial from "./SectionTestimonial"


const Banner = () => {
    return (
        <div id="banner">
            <h1>Sewa Mobil di Bandung Sekarang</h1>
            <p>
                Perjalanan jadi lebih mudah dengan mobil sewaan kami.
                Pesan sekarang, dapatkan kenyamanan maksimal!
            </p>
            <Button type="primary">Mulai Sewa Mobil</Button>
        </div>
    )
}

const LandingPage = () => {
    return (
        <>
            <header>
                <nav>
                    <Navbar />
                </nav>
                <Hero/>
            </header>
            <main>
                <section>
                    <SectionOurServices/>
                </section>
                <section id="whyus">
                    <SectionWhyUs/>
                </section>
                <Banner />
                <section id="testimonial">
                    <SectionTestimonial/>
                </section>
                <section id="faq">
                    <SectionFaq/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default LandingPage