import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "../actions/fetchCars";
import { addCar } from "../actions/addCar";
import { deleteCarByID } from "../actions/deleteCarByID";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    name: "",
    value: 0,
    searchTerm: "",
    carList: [],
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeValue(state, action) {
      state.value = action.payload;
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    changeCars(state, action) {
      state.cars = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.carList = action.payload;
    });
    builder.addCase(addCar.fulfilled, (state, action) => {
      state.carList = [...state.carList, action.payload];
      state.name = "";
      state.value = 0;
    });
    builder.addCase(deleteCarByID.fulfilled, (state, action) => {
      const deletedCar = state.carList.indexOf(action.payload);
      state.carList.splice(deletedCar, 1);
    });
  },
});

export const { changeName, changeValue } = carSlice.actions;
export const carReducer = carSlice.reducer;
