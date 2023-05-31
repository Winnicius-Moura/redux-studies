//DUX PATTERN
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CounterState {
  value: number,
}

const INITIAL_STATE: CounterState = {
  value: 0,
}


const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    incremented(state) {
      state.value++
    },
    amountAdded(state, action: PayloadAction<number>){
      state.value += action.payload
    }
  }
})

export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer