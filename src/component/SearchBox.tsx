import { Button, Card, Flex, Input, Select, Grid } from "antd"
import useSearch from "../hooks/useSearch"
const { useBreakpoint } = Grid
import './SearchBox.scss'

interface SearchBoxProps {
    disabled?: boolean
}

const SearchBox = ({ disabled = false }: SearchBoxProps) => {
    const {
        name,
        category,
        price,
        status,
        handleName,
        handleCategory,
        handlePrice,
        handleStatus,
        handleSearch
    } = useSearch()

    const screens = useBreakpoint()

    return (
        <div className="search-wrapper">
            <Card>
                <Flex gap={'1rem'} wrap>
                    <label>
                        <p>Nama Mobil</p>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleName}
                            width={screens.xs ? '100%' : '208px'}
                            placeholder="Ketik nama/tipe mobil"
                            disabled={disabled}
                        />
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
                            style={{ width: screens.xs ? '100%' : '208px' }}
                            disabled={disabled}
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
                            style={{ width: screens.xs ? '100%' : 'content' }}
                            disabled={disabled}
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
                            style={{ width: screens.xs ? '100%' : '208px' }}
                            disabled={disabled}
                        />
                    </label>
                    <Button
                        type="primary"
                        onClick={() => handleSearch({ name, category, price, status })}
                        style={{ marginTop: '22px' }}
                        disabled={disabled}
                    >
                        Cari Mobil
                    </Button>
                </Flex>
            </Card>
        </div>
    )
}

export default SearchBox