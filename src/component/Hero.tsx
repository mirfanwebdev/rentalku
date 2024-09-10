import { Button, Flex } from "antd";
import trip from '../assets/trip.svg'

const Hero = () => {
    return (
        <Flex justify="space-between" wrap gap={'2.5rem'}>
            <Flex vertical gap={'1rem'} justify="center" align="flex-start" style={{ maxWidth: '568px' }} >
                <h1>Sewa & Rental Mobil Terbaik di Kawasan Bandung</h1>
                <p>
                    Selamat datang di Rentalku. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24jam.
                </p>
                <Button type="primary">Mulai Sewa Mobil</Button>
            </Flex>
            {/* <div style={{ height: '350px', position: 'absolute', right: '8.5rem', bottom: '0' }}> */}
            <div style={{ height: '350px' }}>
                <img src={trip} alt="trip-ilustration" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>
        </Flex>
        
    )
}

export default Hero;