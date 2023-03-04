import {createSlice} from "@reduxjs/toolkit"

// Store to manage the state dynamically
const dataSlice = createSlice({
    name : "loctaiondata",
    initialState:{
        latitude: 20.5937,
        longitude: 78.9629,
        speed : "",
        currency:"",
        distance:"",
        volume : "",
        timezone:"",
    },
    
    //Reducer function
    reducers:{
        addCoordinate : (state,action)=>{
            let country = action.payload;

            switch(country){
                case "India":
                    return{
                        ...state, latitude: 20.5937, longitude: 78.9629, currency:"\u20B9 (Rupees)", speed: "km/hr", distance: "km", volume:"litres", timezone: "GMT+5:30"
                    };
                case "United States":
                    return{
                        ...state, latitude: 37.090240, longitude: -95.712891 , currency:"\u0024 (Dollar)", speed: "Mph (Miles per hour)", distance: "M (miles)", volume:"gallon, pint, quart", timezone: "GMT-5 to GMT-10"
                    }
                case "United Kingdom":
                    return{
                        ...state, latitude: 55.378052, longitude: -3.4360, currency:"\u00A3 (Pound)", speed: "Mph (Miles per hour)", distance: "M (miles)", volume:"gallon, pint, quart", timezone: "GMT"
                    }
                default: return state;
            }
        }
    }
});

export const {addCoordinate} = dataSlice.actions;

export default dataSlice.reducer;