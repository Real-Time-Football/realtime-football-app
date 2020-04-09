export function getLogo(team) {
    let imagesPath = 'src/assets/images/'
    switch (team) {
        case 'São Paulo':
            return imagesPath + 'logo-sao-paulo-256.png'
        case 'Santos':
            return imagesPath + 'logo-santos-256.png'
        default:
            return ''
    }
}
