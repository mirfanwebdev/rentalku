import { Avatar, Card, Flex, Space } from "antd";
import { StarFilled } from "@ant-design/icons";
import { TESTIMONY_LIST as captionTestimonials } from "../../lib/constant";

interface Testimony {
    id: number;
    imgUrl: string;
    name: string;
    age: number;
    city: string;
    rating: number;
    content: string;
}

const listTestimonials: Testimony[] = [
    {
        id: 1,
        imgUrl: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Danny',
        name: 'Dani',
        age: 28,
        city: 'Bandung',
        rating: 5,
        content: captionTestimonials[0],

    },
    {
        id: 2,
        imgUrl: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Joseph',
        name: 'Joseph',
        age: 25,
        city: 'Bandung',
        rating: 5,
        content: captionTestimonials[1],
    },
    {
        id: 3,
        imgUrl: 'https://api.dicebear.com/9.x/lorelei/svg?seed=Jennifer',
        name: 'Ana',
        age: 22,
        city: 'Bandung',
        rating: 5,
        content: captionTestimonials[2],
    }
]
const Testimonials = () => {
    return (
        <Flex wrap justify="center" gap={'1rem'}>
            {listTestimonials.map((item) => (
                <Card style={{ backgroundColor: '#F1F3FF' }}>
                    <Flex align="center" gap={'0.5rem'}>
                        <Avatar size={64} src={item.imgUrl} />
                        <Flex vertical style={{maxWidth: '260px' }}>
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