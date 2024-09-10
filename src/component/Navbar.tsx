import { Button, Flex } from "antd";
import { MENU_LIST } from "../lib/constant";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <>
            <Logo/>
            <Flex gap={'1.25rem'}>
                {MENU_LIST.map((item) => <a key={item} href="#">{item}</a>)}
                <Button type="primary">Register</Button>
            </Flex>
        </>
    )
}

export default Navbar;