import { Flex } from "antd";
import Navbar from "./Navbar";

interface HeaderProps {
    children?: JSX.Element
}

const Header = ({ children }: HeaderProps) => {
    return (
        <>
            <header style={{ backgroundColor: '#F1F3FF', position: 'relative', padding: '1.5rem 8.5rem 0  8.5rem', minHeight: '200px' }}>
                <Flex justify="space-between" align="center" wrap >
                    <Navbar />
                </Flex>
                {children && <div>{children}</div>}
            </header>
        </>
    )
}

export default Header;