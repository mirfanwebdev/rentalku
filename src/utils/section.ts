export const sectionHref = (menu: string) => {
    const formatedMenu = menu.replace(' ', '-').toLowerCase()
    return `#${formatedMenu}`
}