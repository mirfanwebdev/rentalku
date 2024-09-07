import { Button, Flex } from "antd";
// import './Navbar.scss'
import { MENU_LIST } from "../lib/constant";

const Navbar = () => {
    return (
        <>
            <Flex gap={'1rem'}>
                {MENU_LIST.map((item) => <a key={item} href="#">{item}</a>)}
                <Button type="primary">Register</Button>
            </Flex>
        </>
    )
}

export default Navbar;