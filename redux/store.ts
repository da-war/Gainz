import { configureStore } from '@reduxjs/toolkit';

// Example: Counter slice (create a new file for complex logic)
import counterSlice from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
