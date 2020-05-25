export function parsePeriod(period) {
    switch (period) {
        case 'FIRST_PERIOD':
            return '1º Tempo'
        case 'HALF_TIME':
            return 'Intervalo'
        case 'FULL_TIME':
            return 'Fim de jogo'
        case 'SECOND_PERIOD':
            return '2º Tempo'
        default:
            return ''
    }
}
