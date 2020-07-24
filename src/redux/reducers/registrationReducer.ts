type InitialStateType = {
    title: string
};

const initialState = {
    title: 'Registration'
};

export const registrationReducer = (state: InitialStateType = initialState, action: any): any => {
    switch (action) {
        default:
            return state;
    }
};