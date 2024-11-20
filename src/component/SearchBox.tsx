import { Button, Card, Flex, Input, Select } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { Rootstate } from "../redux/store"
import { setCategory, setName, setPrice, setStatus } from "../redux/features/searchCar/searchCarSlice"


const SearchBox = () => {
    const dispatch = useDispatch()
    const { name } = useSelector((state: Rootstate) => state.search)

    return (
        <Card style={{ position: "absolute", top: "-50px" }}>
            <Flex gap={'1rem'} wrap>
                <label>
                    <p>Nama Mobil</p>
                    <Input type="text" name="name" value={name} onChange={(event) => dispatch(setName(event.target.value))} width={'208px'} placeholder="Ketik nama/tipe mobil" />
                </label>
                <label>
                    <p>Kategori</p>
                    <Select
                        placeholder="Masukkan Kapasitas Mobil"
                        onChange={(value) => dispatch(setCategory(value))}
                        options={[
                            { value: 'small', label: '2-4 orang' },
                            { value: 'medium', label: '4-6 orang' },
                            { value: 'large', label: '6-8 orang' }
                        ]}
                        style={{ width: '208px' }}
                    />
                </label>
                <label>
                    <p>Harga</p>
                    <Select
                        placeholder="Masukkan Harga Sewa per Hari"
                        onChange={(value) => dispatch(setPrice(value))}
                        options={[
                            { value: 40000, label: '< 400.000' },
                            { value: 60000, label: '> 600.000' }
                        ]}
                    />
                </label>
                <label>
                    <p>Status</p>
                    <Select
                        placeholder="Disewa"
                        onChange={(value) => dispatch(setStatus(value))}
                        options={[
                            { value: true, label: 'Disewa' },
                            { value: false, label: 'Tersedia' }
                        ]}
                        style={{ width: '208px' }}
                    />
                </label>
                <Button style={{ marginTop: '22px' }} type="primary">Cari Mobil</Button>
            </Flex>
        </Card>
    )
}

export default SearchBox