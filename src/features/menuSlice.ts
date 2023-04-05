import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
    open: boolean;
}

const initialState: MenuState = {
    open: false,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.open = !state.open;
        },
    },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
export { };