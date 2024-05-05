import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./modules/MainPage/MainPageSlice";
export const store = configureStore({
    reducer: {
        application: applicationReducer,
    },
});

export default store;
