import { Flex } from "antd";
import { ADDRESS, MENU_LIST } from "../lib/constant";
// import './Footer.scss'
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
            </Flex>
            <Flex vertical gap='0.5rem'>
                <p>Rentalku 2024</p>
            </Flex>
        </>
    )
}
export default Footer;