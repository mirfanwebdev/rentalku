import { Card, Flex } from "antd";
import { LikeFilled, CreditCardFilled, ClockCircleFilled, SafetyCertificateFilled } from "@ant-design/icons";

interface CardItem {
    title: string;
    desc: string;
    icon?: JSX.Element;
}

const cardList: CardItem[] = [
    {
        title: 'mobil lengkap',
        desc: 'Tersedia banyak pilihan mobil, kondisi baru, bersih dan terawat',
        icon: <LikeFilled />,
    },
    {
        title: 'harga murah',
        desc: 'Harga murah dan bersaing, bisa dibandingkan dengan rental mobil lain',
        icon: <CreditCardFilled />,
    },
    {
        title: 'layanan 24 jam',
        desc: 'Siap melayani kebutuhan Anda 24/7. Kami juga tersedia di hari libur dan tanggal merah',
        icon: <ClockCircleFilled />,
    },
    {
        title: 'sopir profesional',
        desc: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
        icon: <SafetyCertificateFilled />,
    }
]

const SectionWhyUs = () => {
    return (
        <>
            <h2>Why Us?</h2>
            <p>mengapa harus pilih Rentalku?</p>
            <Flex justify="space-between" wrap>
                {cardList.map((item) => (
                    <Card
                        key={item.title}
                        style={{ width: 268 }}
                    >
                        <div style={{fontSize: '1.5rem', color: '#00B0FF'}}>
                            {item.icon}
                        </div>
                        <h3 style={{textTransform: 'capitalize'}}>{item.title}</h3>
                        <p>{item.desc}</p>
                    </Card>
                ))}
            </Flex>
        </>
    )
}

export default SectionWhyUs;