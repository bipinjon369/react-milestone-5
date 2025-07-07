import { createSlice } from '@reduxjs/toolkit';

interface UiState {
    showSignUpBanner: boolean;
}

const initialState: UiState = {
    showSignUpBanner: true,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        hideSignUpBanner: (state) => {
            state.showSignUpBanner = false;
        },
    },
});

export const { hideSignUpBanner } = uiSlice.actions;
export default uiSlice.reducer;