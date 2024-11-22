import { Button, Card, Flex, Input, Select } from "antd"
import useSearch from "../hooks/useSearch"
import { Link } from "react-router-dom"


const SearchBox = () => {
    const { name, category, price, status, handleName, handleCategory, handlePrice, handleStatus, handleSearch } = useSearch()

    return (
        <Card style={{ position: "absolute", top: "-50px" }}>
            <Flex gap={'1rem'} wrap>
                <label>
                    <p>Nama Mobil</p>
                    <Input type="text" name="name" value={name} onChange={handleName} width={'208px'} placeholder="Ketik nama/tipe mobil" />
                </label>
                <label>
                    <p>Kategori</p>
                    <Select
                        placeholder="Masukkan Kapasitas Mobil"
                        onChange={handleCategory}
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
                        onChange={handlePrice}
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
                        onChange={handleStatus}
                        options={[
                            { value: true, label: 'Disewa' },
                            { value: false, label: 'Tersedia' }
                        ]}
                        style={{ width: '208px' }}
                    />
                </label>
                <Button type="primary" onClick={() => handleSearch({ name, category, price, status })} style={{ marginTop: '22px' }}>Cari Mobil</Button>
                {/* <Link to={
                    // '/car/search?'
                    '/car/search?' + name ? `name=${name}` : '' + category ? `category=${category}` : '' + price ? `minPrice=${price}` : '' + status ? `isRented=${status}` : ''
                }>
                    <Button type="primary" style={{ marginTop: '22px' }}>Cari Mobil</Button>
                </Link> */}
            </Flex>
        </Card>
    )
}

export default SearchBox