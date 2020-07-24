type InitialStateType = {
    title: string
};

const initialState = {
    title: 'Login'
};

export const loginReducer = (state: InitialStateType = initialState, action: any): any => {
    switch (action) {
        default:
            return state;
    }
};