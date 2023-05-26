import { createSlice } from '@reduxjs/toolkit'

export const corruptionSlice = createSlice({
  name: 'corruption',
  initialState: {
    loaded: false,
    // data: {
    //     rank: null,
    //     country_name: null,
    //     flag_url: null,
    //     corruption_data: null
    // }

    data: {
      rank: 1,
      country_name: "Denmark",
      flag_url: "upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png",
      corruption_data: {
        years:[2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
        scores:["90","91","92","91","90","88","88","87","88","88","90"]
      }
    }
  },
  reducers: {
    loadDetail: (state) => {
        state.loaded = true;
        
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadDetail} = corruptionSlice.actions

export default corruptionSlice.reducer