import { InitialStateType } from "./types";

const initialState = {
    cardPacks: [],
    page: 1,
    pageCount: 4,
    cardPacksTotalCount: 281,
    minGrade: 0,
    maxGrade: 0,
    token: 'fb78e800-d74d-11ea-81a0-d171c6ee818e',
    tokenDeathTime: 1596664877557
};

export const cardsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};