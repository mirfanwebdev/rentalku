import { Button, Flex } from "antd";
import trip from '../assets/trip.svg'

const Hero = () => {
    return (
        <>
            <Flex vertical gap={'0.5rem'} justify="center" align="flex-start" style={{ maxWidth: '568px' }} >
                <h1>Sewa & Rental Mobil Terbaik di Kawasan Bandung</h1>
                <p>
                    Selamat datang di Rentalku. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24jam.
                </p>
                <Button type="primary">Mulai Sewa Mobil</Button>
            </Flex>
            <div style={{ height: '407px', position: 'absolute', right: '0', bottom: '0' }}>
                <img src={trip} alt="trip-ilustration" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
        </>
        
    )
}

export default Hero;