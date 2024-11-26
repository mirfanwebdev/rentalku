import { Button, Card, Collapse, CollapseProps, DatePicker, Flex, Space } from "antd"
import Footer from "../../component/Footer"
import Header from "../../component/Header"
import SearchBox from "../../component/SearchBox"
import { EXCLUDE, INCLUDE, ListFeature, RULES } from "../../utils/ListFeature"
import { useParams } from "react-router-dom"
import useCarById from "../../hooks/useCarById"
import { carCategory } from "../../utils/carCategory"
import { localPriceFormat } from "../../utils/localPriceFormat"
import CarItem from "../../interface/CarItem"
import './index.scss'
import { UserOutlined } from "@ant-design/icons"
import nameCapital from "../../utils/nameCapital"

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
    car: CarItem
}

const CardOrder = ({ car }: CardOrderProps) => {
    return (
        <Card>
            <Space direction="vertical">
                <div style={{
                    width: '400px',
                    height: '200px',
                    marginBottom: '1.5rem'
                }}>
                    {car.image ?
                        <img
                            src={car.image}
                            alt={car.name}
                            width={'100%'}
                        />
                        : <img
                            src="https://placehold.co/400x200"
                            alt="image-car"
                            width={'100%'}
                        />
                    }
                </div>
                {car.name && <h2>{(nameCapital(car.name))}</h2>}
                <p><span><UserOutlined /></span> {(carCategory(car.category))}</p>
                <label>
                    <p>Tentukan tanggal sewa mobil</p>
                    <DatePicker style={{ width: '80%' }} />
                </label>
                <Flex justify="space-between" style={{ margin: '1.5rem 0' }}>
                    <p>Total</p>
                    {car.price &&
                        <p style={{ fontWeight: 'bold' }}>
                            {(localPriceFormat(car.price))}
                        </p>
                    }
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
                <SearchBox disabled={true} />
                <Flex
                    wrap
                    gap={'2rem'}
                    style={{ margin: '5rem 0' }}
                >
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