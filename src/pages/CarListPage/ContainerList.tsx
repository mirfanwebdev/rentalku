import { Button, Card, Col, Pagination, Row, Space } from "antd";

const ContainerList = () => {
    return (
        <>
            <Row gutter={[24, 16]} style={{ paddingTop: '7.5rem' }}>
                {Array(6).fill(0).map(() => (
                    <Col span={8}>
                        <Card>
                            <Space direction="vertical">
                                <img src="https://placehold.co/300x200" alt="image" width={'100%'} />
                                <p>Innova</p>
                                <p>Rp. 200.000</p>
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