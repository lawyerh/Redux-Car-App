import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "cars",
    initialState: {
        name: "",
        cost: 0,
        searchTerm: "",
        cars: []
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        }
    }
})

export const {changeName, changeCost} = carSlice.actions;
export const carReducer = carSlice.reducer;