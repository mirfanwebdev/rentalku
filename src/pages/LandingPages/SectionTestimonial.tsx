import { Avatar, Card, Grid, Flex, Space } from "antd";
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
const { useBreakpoint } = Grid

const Rating = ({ rating }: { rating: number }) => {
    return (
        <Space style={{ color: '#F9CC00' }}>
            {[...Array(rating)].map((_, index) => (
                <StarFilled key={index} />
            ))}
        </Space>
    )
}

const TestimonyCard = ({ imgUrl, name, age, city, rating, content }: Testimony) => {
    const screens = useBreakpoint()

    return (
        <Card style={{ backgroundColor: '#F1F3FF' }}>
            <Flex vertical={screens.xs ? true : false} align="center" gap={'0.5rem'}>
                <Avatar size={64} src={imgUrl} />
                <Flex vertical align={screens.xs ? 'center' : 'flex-start'} style={{ maxWidth: '260px' }}>
                    <Rating rating={rating} />
                    <p style={{ textAlign: screens.xs ? 'center' : 'left' }}>"{content}"</p>
                    <p style={{ fontWeight: 'bold', marginTop: '0.25rem' }}>{name} {age}, {city}</p>
                </Flex>
            </Flex>
        </Card>
    )
}
const Testimonials = () => {
    return (
        <Flex wrap justify="center" gap={'1rem'}>
            {listTestimonials.map((item) => (
                <TestimonyCard key={item.id} {...item} />
            ))}
        </Flex>
    )
}

const SectionTestimonial = () => {
    return (
        <>
            <h2>Testimonial</h2>
            <p style={{ textAlign: 'center' }}>Berbagai review positif dari beberapa pelanggan kami.</p>
            <Testimonials />
        </>
    )
}

export default SectionTestimonial;