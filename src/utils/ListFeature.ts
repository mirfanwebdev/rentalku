export type ListFeature = string[]

export const INCLUDE: ListFeature = [
    'Durasi maksimal sewa 12jam ',
    'Sudah termasuk bensin selama 12jam',
    'Sudah termasuk tiket wisata',
    'Sudah termasuk pajak',
]

export const EXCLUDE: ListFeature = [
    'Tidak termasuk biaya makan supir Rp 75.000/hari',
    'Jika overtime lebih dari 12jam akan ada tambahan biaya Rp 20.000/jam',
    'Tidak termasuk akomodasi pengiriman',
]

export const RULES: ListFeature = [
    'Tidak termasuk biaya makan sopir Rp 75.000/hari',
    'Jika overtime lebih dari 12jam akan ada tambahan biaya Rp 20.000/jam',
    'Tidak termasuk akomodasi pengiriman',
]