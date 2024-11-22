import { Button, Card, Col, Pagination, Row, Space } from "antd";

export interface carItem {
    id: number
    name: string
    category: string
    price: number
    status: boolean
    start_rent_at: string
    finnish_rent_at: string
    createAt: string
    updateAt: string
    image: string
}

interface ContainerListProps {
    cars: carItem[]
}

const ContainerList = ({ cars }: ContainerListProps) => {
    return (
        <>
            <Row gutter={[24, 16]} style={{ paddingTop: '7.5rem' }}>
                {cars.map((item) => (
                    <Col key={item.id} span={8}>
                        <Card>
                            <Space direction="vertical">
                                <div style={{ width: '300px', height: '200px' }}>
                                    {item.image ?
                                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        : <img src="https://placehold.co/300x200" alt="image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                                </div>
                                <p>{item.name}</p>
                                <p>Rp. {item.price}</p>
                                <p style={{ width: '285px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae, excepturi asperiores repellendus perferendis explicabo molestias eos quibusdam sed! Perspiciatis fugit animi laborum rerum in fuga! Quisquam rem delectus odio!</p>
                                <Button type="primary" style={{ width: '100%' }}>Pesan Sekarang</Button>
                            </Space>
                        </Card>
                    </Col>
                ))}

            </Row>
            <Pagination defaultCurrent={1} total={50} />
        </>
    )
}

export default ContainerList;