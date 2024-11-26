import { Button, Card, Col, Pagination, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { localPriceFormat } from "../../utils/localPriceFormat";
import CarItem from "../../interface/CarItem";

interface ContainerListProps {
    cars: CarItem[]
    current: number
    total?: number
    handlePage: (page: number) => void
}

const ContainerList = ({ cars, current, total, handlePage }: ContainerListProps) => {
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
                                <p>{(localPriceFormat(item.price))}</p>
                                <p style={{ width: '285px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae, excepturi asperiores repellendus perferendis explicabo molestias eos quibusdam sed! Perspiciatis fugit animi laborum rerum in fuga! Quisquam rem delectus odio!</p>
                                <Link to={`/car/detail/${item.id}`}>
                                    <Button type="primary" style={{ width: '100%' }}>Pesan Sekarang</Button>
                                </Link>
                            </Space>
                        </Card>
                    </Col>
                ))}

            </Row>
            <Pagination
                defaultCurrent={1}
                current={current}
                onChange={handlePage}
                pageSize={10}
                total={total}
            />
        </>
    )
}

export default ContainerList;