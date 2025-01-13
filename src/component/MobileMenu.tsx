import { Button, Flex } from "antd";
import { MENU_LIST } from "../lib/constant";
import { CloseOutlined } from "@ant-design/icons";
import { sectionHref } from "../utils/section";

interface MobileMenuProps {
    handleMenu: () => void;
    menu: boolean;

}

const MobileMenu = ({ menu, handleMenu }: MobileMenuProps) => {
    return (
        <div id="mobile-menu" style={{ backgroundColor: '#fff', width: '100vw', height: '100vh', position: 'absolute', top: '0', right: menu ? '0' : '-100%', padding: '2rem', zIndex: '2', transition: 'right 0.5s ease-in-out' }}>
            <Flex vertical justify="flex-end" gap={'4rem'}>
                <Button type="text" onClick={handleMenu} style={{ alignSelf: 'flex-end' }}>
                    <CloseOutlined style={{ fontSize: '1.5rem' }} />
                </Button>
                <Flex vertical gap={'1.25rem'}>
                    {MENU_LIST.map((item) => <a key={item} href={(sectionHref(item))} style={{ fontSize: '1.25rem' }} onClick={handleMenu}>{item}</a>)}
                    <Button type="primary" style={{ width: '50%' }}>Register</Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default MobileMenu;