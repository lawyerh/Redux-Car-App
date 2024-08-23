import axios from "axios";
import CARS_URL from "./baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCarByID = createAsyncThunk("cars/deleteCar", async (id) => {
    try {
        const response = axios.delete(`${CARS_URL}/${id}`)
        return response.data
    } catch (error) {
        return error
    }
})