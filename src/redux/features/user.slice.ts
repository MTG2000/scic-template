import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
}

interface StoreState {
    me: User | undefined
}

const initialState = {
    me: undefined
} as StoreState;

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<StoreState['me']>) {
            state.me = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
