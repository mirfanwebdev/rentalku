const SERVICE_LIST = [
    'sewa mobil dengan supir di Bandung 12 jam',
    'sewa mobil lepas kunci di Bandung 24 jam',
    'sewa mobil jangka panjang bulanan',
    'gratis antar jemput mobil di bandara',
    'layanan airport / drop in out',
]
const SectionOurServices = () => {
    return (
        <>
            <div style={{ maxWidth: '468px' }}>
                <h2>Best Car Rental for any kind of trip in Bandung</h2>
                <p>
                    Sewa mobil di Bandung bersama Kami dengan jaminan harga lebih murah dibandingkan yang lain,
                    kondisi mobil baru, serta kualitas pelayanan terbaik untuk segala keperluan Anda.
                </p>
                {SERVICE_LIST.map((item) => <div key={item}>{item}</div>)}
            </div>
        </>
    )
}

export default SectionOurServices;