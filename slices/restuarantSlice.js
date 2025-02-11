import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    restuarant:null
}

export const restuarantSlice = createSlice({
  name: 'restuarant',
  initialState,
  reducers: {
    setRestuarant: (state, action) => {
      state.restuarant = action.payload
    },
  },
})

export const { setRestuarant } = restuarantSlice.actions

// export const selectReasturant = state => state.restuarant.restuarant;
export const selectReasturant = state => state.resturant.restuarant;

export default restuarantSlice.reducer