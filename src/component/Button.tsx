import { Button as AntButton } from "antd"

const Button = ({ children }: { children: React.ReactNode }) => {
    return <AntButton>{children}</AntButton>
}

export default Button