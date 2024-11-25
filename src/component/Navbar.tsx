import { Button, Flex } from "antd";
import { MENU_LIST } from "../lib/constant";
import { sectionHref } from "../utils/section";
import Logo from "./Logo";

const Navbar = () => {

    return (
        <>
            <Logo />
            <Flex gap={'1.25rem'} align="center">
                {MENU_LIST.map((item) => <a key={item} href={(sectionHref(item))}>{item}</a>)}
                <Button type="primary">Register</Button>
            </Flex>
        </>
    )
}

export default Navbar;