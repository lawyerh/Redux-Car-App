import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import CARS_URL from "./baseURL";

export const addCar = createAsyncThunk("cars/addCar", async (car) => {
    console.log(car);
  try {
    const response = await axios.post(CARS_URL, car);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return err.message;
  }
});
