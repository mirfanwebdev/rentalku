export const carCategory = (category: string) => {
    switch (category) {
        case 'small':
            return '2-4 orang'
        case 'medium':
            return '4-6 orang'
        case 'large':
            return '6-8 orang'
        default:
            return '2-4 orang'
    }
}