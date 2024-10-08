import { configureStore } from "@reduxjs/toolkit";
import { carReducer, changeName, changeValue } from "./slices/carSlice";
import { fetchCars } from "./actions/fetchCars";
import { addCar } from "./actions/addCar";
import { deleteCarByID } from "./actions/deleteCarByID";

const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

export { store, changeName, changeValue, fetchCars, addCar, deleteCarByID };
