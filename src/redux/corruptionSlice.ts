import { createSlice } from '@reduxjs/toolkit'

export const corruptionSlice = createSlice({
  name: 'corruption',
  initialState: {
    loaded: false,
    data: {
        rank: null,
        country_name: null,
        flag_url: null,
        chart_data: {
          scores: [],
          years: []
        }
    }
  },
  reducers: {
    loadDetail: (state, action) => {
        state.loaded = true;
        state.data = {
          ...state.data,
          ...action.payload
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadDetail} = corruptionSlice.actions

export default corruptionSlice.reducer