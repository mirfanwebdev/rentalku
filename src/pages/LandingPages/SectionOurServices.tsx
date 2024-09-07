import { Flex, Space } from "antd";
import { SERVICE_LIST } from "../../lib/constant";
import { CheckCircleFilled } from "@ant-design/icons";
import share from '../../assets/share.svg'
const SectionOurServices = () => {
    return (
        <>
            <Flex justify="center" gap={'5rem'} wrap style={{margin: '5rem 0'}}>
                <img src={share} alt="join" style={{ maxWidth: '400px' }} />
                <Flex vertical justify="center" gap={'0.5rem'} style={{ maxWidth: '468px' }}>
                    <h2>Best Car Rental for any kind of trip in Bandung</h2>
                    <p>
                        Sewa mobil di Bandung bersama Kami dengan jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk segala keperluan Anda.
                    </p>    
                    {SERVICE_LIST.map((item) => (
                        <Space key={item} size={'middle'}>
                            <CheckCircleFilled style={{color: '#00B0FF'}} />
                            <p style={{textTransform: 'capitalize'}}>{item}</p>
                        </Space>
                    ))}
                </Flex>
            </Flex>
            
        </>
    )
}

export default SectionOurServices;