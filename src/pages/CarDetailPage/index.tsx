import { Card, Collapse, CollapseProps, DatePicker, Flex, Space } from "antd"
import Footer from "../../component/Footer"
import Header from "../../component/Header"
import SearchBox from "../../component/SearchBox"
import { EXCLUDE, INCLUDE, ListFeature, RULES } from "../../utils/ListFeature"
import './index.scss'
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

const CardOrder = () => {
    return (
        <Card>
            <Space direction="vertical">
                <img src="https://placehold.co/400x200" alt="image-car" width={'100%'} />
                <h2>Innova</h2>
                <p>6-8 orang</p>
                <label>
                    <p>Tentukan tanggal sewa mobil</p>
                    <DatePicker />
                </label>
            </Space>
        </Card>
    )
}

const CarDetailPage = () => {
    return (
        <>
            <Header />
            <main>
                <SearchBox />
                <Flex wrap gap={'2rem'} style={{ margin: '5rem 0' }}>
                    <DetailPackage />
                    <CardOrder />
                </Flex>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default CarDetailPage