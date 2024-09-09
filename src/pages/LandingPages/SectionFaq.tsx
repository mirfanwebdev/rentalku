import { Collapse, Flex } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const texts = [
    'Persyaratan kami sangat mudah! Anda hanya perlu menyiapkan dokumen standar seperti SIM, KTP, dan beberapa ketentuan lainnya.',
    'Kami menawarkan fleksibilitas sewa lepas kunci dengan minimal durasi yang sesuai kebutuhan Anda, mulai dari satu hari hingga mingguan.',
    'Untuk memastikan ketersediaan kendaraan, kami sarankan booking minimal 2-3 hari sebelumnya, terutama pada hari libur atau musim ramai.',
    'Layanan antar-jemput tersedia dengan biaya tambahan. Biaya bergantung pada jarak lokasi penjemputan dan pengantaran mobil yang Anda pilih.',
    'Jika terjadi kecelakaan, segera hubungi kami. Kami akan membantu menangani situasi dengan prosedur yang sudah ditetapkan untuk keamanan Anda.',
]

const items = [
    {
        key: '1',
        label: 'Apa saja syarat yang dibutuhkan?',
        children: <p>{texts[0]}</p>
    },
    {
        key: '2',
        label: 'Berapa hari minimal sewa mobil lepas kunci?',
        children: <p>{texts[1]}</p>
    },
    {
        key: '3',
        label: 'Berapa hari sebelumnya sebaiknya booking sewa mobil?',
        children: <p>{texts[2]}</p>
    },
    {
        key: '4',
        label: 'Apakah ada biaya antar-jemput?',
        children: <p>{texts[3]}</p>
    },
    {
        key: '5',
        label: 'Bagaimana jika terjadi kecelakaan',
        children: <p>{texts[4]}</p>
    },
]

const CollapseFaq = () => {
    return (
        <Collapse
            items={items}
            defaultActiveKey={['1']}
        />
    )
}

const SectionFaq = () => {
    return (    
        <>
            <Flex vertical gap={'middle'}>
                <h2>Frequently Asked Question</h2>
                <p>Pertanyaan umum dan jawaban lengkap untuk layanan kami</p>
            </Flex>
            <div style={{width: '668px'}}>
                <CollapseFaq />
            </div>
        </>
    )
}

export default SectionFaq;