export type OneCardsPackType = {
    _id: string,
    user_id: string,
    user_name: string,
    private: boolean,
    name: string,
    path: string,
    grade: number,
    shots: number,
    cardsCount: number,
    type: string,
    rating: number,
    created: string,
    updated: string,
    __v: number
};

export type InitialStateType = {
    cardPacks: Array<OneCardsPackType>,
    page: number
    pageCount: number
    cardPacksTotalCount: number,
    minGrade: number,
    maxGrade: number,
    token: string,
    tokenDeathTime: number
};