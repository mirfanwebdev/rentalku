import { Button, Flex } from "antd";

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
        </>
        
    )
}

export default Hero;