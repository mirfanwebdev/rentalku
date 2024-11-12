import Hero from "../../component/Hero"
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import SectionOurServices from "./SectionOurServices"
import SectionWhyUs from "./SectionWhyUs"
import SectionFaq from "./SectionFaq"
import SectionTestimonial from "./SectionTestimonial"
import { Button } from "antd"
import './index.scss'
import { Link } from "react-router-dom"


const Banner = () => {
    return (
        <div id="banner">
            <h1>Sewa Mobil di Bandung Sekarang</h1>
            <p>
                Perjalanan jadi lebih mudah dengan mobil sewaan kami.
                Pesan sekarang, dapatkan kenyamanan maksimal!
            </p>
            <Link to={'/car'}>
                <Button type="primary">Mulai Sewa Mobil</Button>
            </Link>
        </div>
    )
}

const LandingPage = () => {
    return (
        <>
            <Header>
                <Hero>
                    <Link to={'/car'}>
                        <Button type="primary">Mulai Sewa Mobil</Button>
                    </Link>
                </Hero>
            </Header>
            <main>
                <section id="ourservices">
                    <SectionOurServices />
                </section>
                <section id="whyus">
                    <SectionWhyUs />
                </section>
                <section id="testimonial">
                    <SectionTestimonial />
                </section>
                <Banner />
                <section id="faq">
                    <SectionFaq />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default LandingPage