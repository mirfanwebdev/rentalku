import { Avatar, Card, Flex, Space } from "antd";
import { StarFilled } from "@ant-design/icons";

const captionTestimonials = [
    'Mobilnya bersih dan nyaman, proses sewa sangat mudah. Pelayanan cepat dan ramah, membuat perjalanan saya jadi lancar. Harga juga terjangkau. Pasti akan sewa lagi di sini!',
    'Mobilnya bagus, terawat, dan paling aman di tempatnya. Saya sangat puas dan pasti akan sewa lagi di sini untuk perjalanan selanjutnya',
    'Layanan top! Mobil sesuai pesanan, diantar tepat waktu. Proses simpel, staf responsif. Sewa mobil di sini sangat memuaskan, highly recommended!',
]

const listTestimonials = [
    {
        id: 1,
        imgUrl: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Danny',
        name: 'Dani',
        age: 30,
        city: 'Bandung',
        rating: 5,
        content: captionTestimonials[0],

    },
    {
        id: 2,
        imgUrl: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Joseph',
        name: 'Joseph',
        age: 30,
        city: 'Bandung',
        rating: 5,
        content: captionTestimonials[1],
    },
    {
        id: 3,
        imgUrl: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Jennifer',
        name: 'Ana',
        age: 30,
        city: 'Bandung',
        rating: 5,
        content: captionTestimonials[2],
    }
]
const Testimonials = () => {
    return (
        <Flex wrap gap={'1rem'} style={{overflow: 'auto'}}>
            {listTestimonials.map((item) => (
                <Card style={{ backgroundColor: '#F1F3FF' }}>
                    <Flex align="center" gap={'0.5rem'}>
                        <Avatar size={64} src={item.imgUrl} />
                        <Flex vertical style={{width: '280px'}}>
                            <Space style={{color: '#F9CC00'}}>
                            {[...Array(item.rating)].map((_, index) => (
                                <StarFilled key={index} />
                            ))}
                            </Space>
                            <p>"{item.content}"</p>
                            <p style={{fontWeight: 'bold', marginTop: '0.25rem'}}>{item.name} {item.age}, {item.city}</p>
                        </Flex>
                    </Flex>
                    
                </Card>
            ))}
        </Flex>
    )
}

const SectionTestimonial = () => {
    return (
        <>
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari beberapa pelanggan kami.</p>
            <Testimonials/>
        </>
 )
}

export default SectionTestimonial;