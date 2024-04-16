import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../api/api.slice"
import counterSlice from "../features/counter/counterSlice"


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    // [usersSlice.reducerPath]: usersSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>