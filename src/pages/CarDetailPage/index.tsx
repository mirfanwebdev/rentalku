import { Button, Card, Collapse, CollapseProps, DatePicker, Flex, Space } from "antd"
import Footer from "../../component/Footer"
import Header from "../../component/Header"
import SearchBox from "../../component/SearchBox"
import { EXCLUDE, INCLUDE, ListFeature, RULES } from "../../utils/ListFeature"
import './index.scss'
import { useParams } from "react-router-dom"
import useCarById from "../../hooks/useCarById"
import CarDetail from "../../interface/carDetail"
interface Section {
    title: string,
    list?: ListFeature,
}
const DetailSection = ({ title, list }: Section) => {
    return (
        <Space direction="vertical">
            <h3>{title}</h3>
            <ul>
                {list?.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </Space>
    )
}

const ruleItems: CollapseProps['items'] = [{
    key: '1',
    label: 'Refund, Reschedule, Overtime',
    children: <ul>{RULES.map((item) => <li key={item}>{item}</li>)}</ul>

}]

const CollapseSection = () => {
    return (
        <Collapse
            items={ruleItems}
            defaultActiveKey={['1']}
            ghost
            expandIconPosition="end"
        />
    )
}

const DetailPackage = () => {
    return (
        <Card style={{ width: 605 }}>
            <Space direction="vertical">
                <h1>Tentang Paket</h1>
                <DetailSection title="Include" list={INCLUDE} />
                <DetailSection title="Exclude" list={EXCLUDE} />
                <CollapseSection />
            </Space>
        </Card>
    )
}

interface CardOrderProps {
    car: CarDetail
}

const CardOrder = ({ car }: CardOrderProps) => {
    return (
        <Card>
            <Space direction="vertical">
                <div style={{ width: '400px', height: '200px' }}>
                    {car.image ?
                        <img src={car.image} alt={car.name} width={'100%'} />
                        : <img src="https://placehold.co/400x200" alt="image-car" width={'100%'} />
                    }
                </div>

                <h2>{car.name}</h2>
                <p>{car.category}</p>
                <label>
                    <p>Tentukan tanggal sewa mobil</p>
                    <DatePicker />
                </label>
                <Flex justify="space-between">
                    <p>Total</p>
                    <p style={{ fontWeight: 'bold' }}>Rp. {car.price}</p>
                </Flex>
                <Button type="primary" style={{ width: '100%' }}>Pesan Sekarang</Button>
            </Space>
        </Card>
    )
}

const CarDetailPage = () => {
    const params = useParams()
    const { carById } = useCarById(Number(params.id))
    return (
        <>
            <Header />
            <main>
                <SearchBox />
                <Flex wrap gap={'2rem'} style={{ margin: '5rem 0' }}>
                    <DetailPackage />
                    <CardOrder car={carById} />
                </Flex>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CarDetailPage