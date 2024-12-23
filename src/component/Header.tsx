import { Flex } from "antd";
import Navbar from "./Navbar";
import './Header.scss'

interface HeaderProps {
    children?: JSX.Element
}

const Header = ({ children }: HeaderProps) => {
    return (
        <>
            <header>
                <Flex justify="space-between" align="center" wrap >
                    <Navbar />
                </Flex>
                {children && <div>{children}</div>}
            </header>
        </>
    )
}

export default Header;