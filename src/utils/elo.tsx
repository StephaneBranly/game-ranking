export const elo_expected = (A: number, B: number): number => {
    return 1 / (1 + 10 ** ((B - A) / 400))
}

export const elo = (old: number, exp: number, score: 0 | 1, nbTeam:number=1) => {
    return old + 20 * (score - exp) / nbTeam
}