export const elo_get_k_factor = (k_first: number, n:number, k: number, nb_played: number): number => {
    if (nb_played < n)
        return k_first
    return k
}

export const elo_expected = (A: number, B: number): number => {
    return 1 / (1 + 10 ** ((B - A) / 400))
}

export const elo = (old: number, exp: number, score: 0 | 1, k_factor: number, nbTeam:number=1): number => {
    return old + k_factor * (score - exp) / nbTeam
}