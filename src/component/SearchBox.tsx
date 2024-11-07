import { Button, Card, Flex, Input, Select } from "antd"

const SearchBox = () => {
    return (
        <Card style={{ position: "absolute", top: "-50px"}}>
            <Flex gap={'1rem'} wrap>
                <label>
                    <p>Nama Mobil</p>
                    <Input type="text" width={'208px'} placeholder="Ketik nama/tipe mobil" />
                </label>
                <label>
                    <p>Kategori</p>
                    <Select
                        placeholder="Masukkan Kapasitas Mobil"
                        options={[
                        { value: 'small', label: '2-4 orang' },
                        { value: 'medium', label: '4-6 orang' },
                        {value: 'large', label: '6-8 orang' }
                        ]}
                        style={{ width: '208px' }}
                    />
                </label>
                <label>
                    <p>Harga</p>
                    <Select
                        placeholder="Masukkan Harga Sewa per Hari"
                        options={[
                        { value: '40.000', label: '< 400.000' },
                        { value: '60.000', label: '> 600.000' }
                        ]}
                    />
                </label>
                <label>
                    <p>Status</p>
                    <Select
                        placeholder="Disewa"
                        options={[
                        { value: 'disewa', label: 'Disewa' },
                        { value: 'tersedia', label: 'Tersedia' }
                        ]}
                        style={{ width: '208px' }}
                    />
                </label>
                <Button style={{ marginTop: '22px'}} type="primary">Cari Mobil</Button>
            </Flex>
        </Card>
    )
}

export default SearchBox