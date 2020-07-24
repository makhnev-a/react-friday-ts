type InitialStateType = {
    title: string
};

const initialState = {
    title: 'Profile'
};

export const profileReducer = (state: InitialStateType = initialState, action: any): any => {
    switch (action) {
        default:
            return state;
    }
};