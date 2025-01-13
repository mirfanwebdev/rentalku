import { Card, Space, Button, Grid, ConfigProvider } from "antd"
import { localPriceFormat } from "../../utils/localPriceFormat"
import { Link } from "react-router-dom"
const { useBreakpoint } = Grid
const { Meta } = Card

interface CardCarProps {
    image: string
    name: string
    price: number
    id: number
}
const CardCar = ({ image, name, price, id }: CardCarProps) => {
    const screens = useBreakpoint()
    return (
        <ConfigProvider
            theme={{
                components: {
                    Card: {
                        bodyPadding: 12,
                    },
                }
            }}
        >
            <Card
                hoverable
                cover={
                    image ?
                        <img
                            src={image}
                            alt={name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        :
                        <img
                            src="https://placehold.co/300x200"
                            alt="image"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                }

            >
                <Meta
                    title={name}
                    description={localPriceFormat(price)}
                />
                {screens.xs ? null : (<p style={{ width: '285px', padding: '0.5rem 0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae, excepturi asperiores repellendus perferendis explicabo molestias eos quibusdam sed! Perspiciatis fugit animi laborum rerum in fuga! Quisquam rem delectus odio!</p>)}
                <Link to={`/car/detail/${id}`}>
                    <Button type="primary" style={{ width: '100%' }}>Pesan Sekarang</Button>
                </Link>
            </Card>
        </ConfigProvider>
    )
}

export default CardCar