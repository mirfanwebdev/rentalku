import { Col, Grid, Pagination, Row } from "antd";
import CarItem from "../../interface/CarItem";
import CardCar from "./CardCar";
const { useBreakpoint } = Grid

interface ContainerListProps {
    cars: CarItem[]
    current: number
    total?: number
    error: boolean
    isLoading: boolean
    handlePage: (page: number) => void
}

const ContainerList = ({ cars, current, total, error, isLoading, handlePage }: ContainerListProps) => {
    const screens = useBreakpoint()

    return (
        <>
            {isLoading ?
                <h1 style={{ paddingTop: screens.xs ? '1rem' : '7rem' }}>Loading.....</h1>
                :
                <>
                    {error ?
                        <h1 style={{ paddingTop: screens.xs ? '1rem' : '7rem' }}>505: Internal Server Error</h1>
                        :
                        <>
                            <Row gutter={[{ xs: 8, md: 24 }, 16]} style={{ paddingTop: screens.xs ? '1rem' : '7.5rem' }}>
                                {cars.map((item) => (
                                    <Col key={item.id} span={screens.xs ? 12 : 8}>
                                        <CardCar
                                            image={item.image}
                                            name={item.name}
                                            price={item.price}
                                            id={item.id}
                                        />
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
                    }
                </>
            }
        </>
    )
}

export default ContainerList;