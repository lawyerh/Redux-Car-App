import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import CARS_URL from "./baseURL";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const response = await axios.get(CARS_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});
