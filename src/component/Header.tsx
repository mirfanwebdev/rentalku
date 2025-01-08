import { Flex, Grid } from "antd";
import Navbar from "./Navbar";
import './Header.scss';
const { useBreakpoint } = Grid

interface HeaderProps {
    children?: JSX.Element
}

const Header = ({ children }: HeaderProps) => {
    const screens = useBreakpoint();
    return (
        <>
            <header>
                <Flex justify="space-between" align={screens.xs ? 'flex-start' : 'center'} wrap >
                    <Navbar />
                </Flex>
                {children && <div>{children}</div>}
            </header>
        </>
    )
}

export default Header;