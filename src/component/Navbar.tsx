import { Button, Flex, Grid } from "antd";
import { MENU_LIST } from "../lib/constant";
import { sectionHref } from "../utils/section";
import Logo from "./Logo";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
const { useBreakpoint } = Grid;

interface MobileMenuProps {
    handleMenu: () => void
}

const MobileMenu = ({ handleMenu }: MobileMenuProps) => {
    return (
        <div id="mobile-menu" style={{ backgroundColor: '#fff', width: '100vw', height: '100vh', position: 'absolute', top: '0', right: '-100%', padding: '2rem', zIndex: '2', transition: 'right 0.5s ease-in-out' }}>
            <Flex vertical justify="flex-end" gap={'1.25rem'}>
                <Button type="text" onClick={handleMenu} style={{ alignSelf: 'flex-end' }}>
                    <CloseOutlined style={{ fontSize: '1.5rem' }} />
                </Button>
                <Flex vertical gap={'1.25rem'}>
                    {MENU_LIST.map((item) => <a key={item} href={(sectionHref(item))}>{item}</a>)}
                    <Button type="primary" style={{ width: '50%' }}>Register</Button>
                </Flex>
            </Flex>
        </div>
    )
}

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const screens = useBreakpoint();

    const handleMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.style.right = menu ? '0' : '-100%';
        }
        setMenu(!menu)
    }

    return (
        <>
            {screens.xs && <MobileMenu handleMenu={handleMenu} />}
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