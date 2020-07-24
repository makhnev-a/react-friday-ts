type InitialStateType = {
    title: string
};

const initialState = {
    title: 'NewPassword'
};

export const newPasswordReducer = (state: InitialStateType = initialState, action: any): any => {
    switch (action) {
        default:
            return state;
    }
};