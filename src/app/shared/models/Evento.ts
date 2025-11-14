export interface Evento {
    id?: number,
    descricao: string,
    titulo: string,
    local: string,
    dataHoraEvento: string
}

export interface EventoPaginacao {
    eventos: Evento[],
    quantidadeEvento: number
}