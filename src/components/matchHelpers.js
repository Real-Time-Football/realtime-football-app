let imagesPath = 'src/assets/images/'

let teams = {
    SAO_PAULO: {
        logo: imagesPath + 'logo-sao-paulo-256.png',
        name: 'São Paulo',
    },
    SANTOS: {
        logo: imagesPath + 'logo-santos-256.png',
        name: 'Santos',
    },
    PALMEIRAS: {
        logo: imagesPath + 'logo-palmeiras-256.png',
        name: 'Palmeiras',
    },
    CORINTHIANS: {
        logo: imagesPath + 'logo-do-corinthians-256.png',
        name: 'Corinthians',
    },
}

let periods = {
    FIRST_PERIOD: '1º Tempo',
    HALF_TIME: 'Intervalo',
    FULL_TIME: 'Fim de jogo',
    SECOND_PERIOD: '2º Tempo',
}

export function parseTeamLogo(team) {
    if (teams[team] === undefined) return ''

    return teams[team].logo
}

export function parseTeamName(team) {
    if (teams[team] === undefined) return ''

    return teams[team].name
}

export function parseMatchPeriod(period) {
    if (periods[period] === undefined) return ''

    return periods[period]
}
