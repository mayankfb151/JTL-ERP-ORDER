import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CounterState {
  value: number
  searchString: string,
  searchOptions: any,
} 

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  searchString: '',
  searchOptions: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearch: (state,  action) => {
        state.searchString = action.payload;
    },
    setSearchOptions: (state,  action) => {
      state.searchOptions = action.payload;
  },

    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload

    },
  },
})

export const { increment, decrement, incrementByAmount, setSearch, setSearchOptions  } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value
export const selectSearchString = (state: RootState) => state.counter.searchString
export const selectSearchOptions = (state: RootState) => state.counter.searchOptions



export default counterSlice.reducer