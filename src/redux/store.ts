import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./features/ui.slice";
import userSlice from "./features/user.slice";

const defaultStore = configureStore({
  reducer: {
    ui: uiSlice,
    user: userSlice,
  },
});

export let store = defaultStore;

export const createReduxStore = (initalState?: Partial<RootState>) => {
  return store = configureStore({
    reducer: {
      ui: uiSlice,
      user: userSlice,
    },
    preloadedState: initalState
  });
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
