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
      // payload == all cars
      state.carList = action.payload;
    });
    builder.addCase(addCar.fulfilled, (state, action) => {
      // payload == {added Car}
      state.carList = [...state.carList, action.payload];
      state.name = "";
      state.value = 0;
    });
    builder.addCase(deleteCarByID.fulfilled, (state, action) => {
      // payload == "id"
      state.carList = state.carList.filter((car) => car.id !== action.payload);
    });
  },
});

export const { changeName, changeValue, changeSearchTerm } = carSlice.actions;
export const carReducer = carSlice.reducer;
