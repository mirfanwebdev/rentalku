import { Button, Flex, Space } from "antd";
import { ADDRESS, MENU_LIST } from "../lib/constant";
import { FacebookOutlined, InstagramOutlined, XOutlined, MailOutlined, YoutubeOutlined } from "@ant-design/icons";
import Logo from "./Logo";

interface SocialMedia {
    id: number;
    name: string;
    link: string;
    icon: JSX.Element;
}

const socMedList: SocialMedia[] = [
    {
        id: 1,
        name: 'facebook',
        link: 'https://www.facebook.com',
        icon: <FacebookOutlined />,
    },
    {
        id: 2,
        name: 'instagram',
        link: 'https://www.instagram.com',
        icon: <InstagramOutlined />,
    },
    {
        id: 3,
        name: 'twitter',
        link: 'https://www.twitter.com',
        icon: <XOutlined />,
    },
    {
        id: 4,
        name: 'mail',
        link: 'https://www.gmail.com',
        icon: <MailOutlined />,
    },
    {
        id: 5,
        name: 'youtube',
        link: 'https://www.youtube.com',
        icon: <YoutubeOutlined />,
    }
]
const Footer = () => {
    return (
        <>
            <Flex vertical gap='0.5rem'>
                {ADDRESS.map((item) => <p key={item}>{item}</p>)}
            </Flex>
            <Flex vertical gap='0.5rem'>
                {MENU_LIST.map((item) => <a key={item} href="#">{item}</a>)}
            </Flex>
            <Flex vertical gap='0.5rem'>
                <p>Connect with us:</p>
                <Space>
                    {socMedList.map((item: SocialMedia) => (
                        <Button
                            type="primary"
                            shape="circle"
                            key={item.id}
                            href={item.link}
                            icon={item.icon}
                        />
                    ))}
                </Space>
            </Flex>
            <Flex vertical gap='0.5rem'>
                <p>Rentalku 2024</p>
                <Logo/>
            </Flex>
        </>
    )
}
export default Footer;