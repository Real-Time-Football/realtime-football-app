export function getLogo(team) {
    let imagesPath = 'src/assets/images/'
    switch (team) {
        case 'SAO_PAULO':
            return imagesPath + 'logo-sao-paulo-256.png'
        case 'SANTOS':
            return imagesPath + 'logo-santos-256.png'
        case 'PALMEIRAS':
            return imagesPath + 'logo-palmeiras-256.png'
        case 'CORINTHIANS':
            return imagesPath + 'logo-do-corinthians-256.png'
        default:
            return ''
    }
}

export function parseName(name) {
    switch (name) {
        case 'SAO_PAULO':
            return 'São Paulo'
        case 'SANTOS':
            return 'Santos'
        case 'PALMEIRAS':
            return 'Palmeiras'
        case 'CORINTHIANS':
            return 'Corinthians'
        default:
            return ''
    }
}
