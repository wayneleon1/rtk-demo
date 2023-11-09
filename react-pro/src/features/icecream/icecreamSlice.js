import { createSlice } from "@reduxjs/toolkit";
import cakeActions from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecream--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
