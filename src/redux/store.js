import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./slice/CategorySlice";

export const store = configureStore({
    reducer:{
    category:CategorySlice,
    }
});