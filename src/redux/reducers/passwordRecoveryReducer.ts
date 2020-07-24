type InitialStateType = {
    title: string
};

const initialState = {
    title: 'Password Recovery'
};

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: any): any => {
    switch (action) {
        default:
            return state;
    }
};