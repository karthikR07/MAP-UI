import "../components/style.css"
import { useState } from "react";

import {useDispatch} from "react-redux";
import {addCoordinate} from "./features/dataStore"

//Search form component
const FormSearch = ()=>{

    const dispatch = useDispatch();

    const [loction, setLocation] = useState("");

    function updateLocation(e){   //it updates and store the location from Select tag to local state "location"
        if(e!=="locations"){
            setLocation(e);
        }
    }

    const onSearch = async(e)=>{   //it update location to store
        e.preventDefault()
        let value = e.target.value;
        if(value==="submit"){
            dispatch(addCoordinate(loction));
            document.querySelector(".section1").style.filter = "none";
            document.querySelector(".sidebar").style.filter = "none";
            document.querySelector(".form").style.display = "none";
        }else{
            document.querySelector(".section1").style.filter = "none";
            document.querySelector(".sidebar").style.filter = "none";
            document.querySelector(".form").style.display = "none"
        }
    }

    return(
        <div className ="item form">
            <p>Search</p>
            <form>
                <label>Select :</label>
                <select onChange={(e)=>{updateLocation(e.target.value)}} className="selectLocations">
                    <option value="locations">Locations</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                </select>
                <br></br>
            </form>
            <div className="formbtns">
                <button value="cancel" onClick={(e)=>{onSearch(e)}}>cancel</button>
                <button value="submit" onClick={(e)=>{onSearch(e)}}>Submit</button>
            </div>
            
        </div>
    )
}

export default FormSearch;