import { Button, Flex, Grid } from "antd";
import { MENU_LIST } from "../lib/constant";
import { sectionHref } from "../utils/section";
import Logo from "./Logo";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
const { useBreakpoint } = Grid;

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const screens = useBreakpoint();

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            {screens.xs && <MobileMenu menu={menu} handleMenu={handleMenu} />}
            <Logo />
            {screens.xs ?
                (<Button type="text" onClick={handleMenu}>
                    <MenuOutlined style={{ fontSize: '1.5rem' }} />
                </Button>)
                :
                (<Flex gap={'1.25rem'} align="center">
                    {MENU_LIST.map((item) => <a key={item} href={(sectionHref(item))}>{item}</a>)}
                    <Button type="primary">Register</Button>
                </Flex>)
            }
        </>
    )
}

export default Navbar;