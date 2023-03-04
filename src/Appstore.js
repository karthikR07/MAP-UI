import {configureStore} from "@reduxjs/toolkit";
import dataReducer from "./components/features/dataStore";

export default configureStore({
    reducer:{
        datashare: dataReducer
    }
})