import { Collapse, Flex } from "antd";
import { ANSWER_LIST as texts } from "../../lib/constant";

interface FaqItem {
    key: string;
    label: string;
    children: JSX.Element
}

const items: FaqItem[] = [
    {
        key: '1',
        label: 'Apa saja syarat yang dibutuhkan?',
        children: <p>{texts[0]}</p>
    },
    {
        key: '2',
        label: 'Berapa hari minimal sewa mobil lepas kunci?',
        children: <p>{texts[1]}</p>
    },
    {
        key: '3',
        label: 'Berapa hari sebelumnya sebaiknya booking sewa mobil?',
        children: <p>{texts[2]}</p>
    },
    {
        key: '4',
        label: 'Apakah ada biaya antar-jemput?',
        children: <p>{texts[3]}</p>
    },
    {
        key: '5',
        label: 'Bagaimana jika terjadi kecelakaan',
        children: <p>{texts[4]}</p>
    },
]

const CollapseFaq = () => {
    return (
        <Collapse
            items={items}
            defaultActiveKey={['1']}
        />
    )
}

const SectionFaq = () => {
    return (    
        <>
            <Flex vertical gap={'middle'}>
                <h2>Frequently Asked Question</h2>
                <p>Pertanyaan umum dan jawaban lengkap untuk layanan kami</p>
            </Flex>
            <div style={{width: '668px'}}>
                <CollapseFaq />
            </div>
        </>
    )
}

export default SectionFaq;