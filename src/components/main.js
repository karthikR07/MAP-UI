import "../components/style.css"
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet"
import {useSelector} from "react-redux";

// it centre the updated position of map view 
function CentreMapView({coords}){
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
}

//map component
const Main = ()=>{

    //gets data from store
    const {longitude, latitude, currency, speed, distance, volume, timezone} = useSelector(state => state.datashare) 


    function searchBar(){    //it display the component
        document.querySelector(".form").style.display = "block";
        document.querySelector(".section1").style.filter = "blur(5px)";
        document.querySelector(".sidebar").style.filter = "blur(5px)"
    }

    return(
        <div className = "item main">
            <MapContainer className="leaflet-container" center={[latitude,longitude]} zoom={5} scrollWheelZoom={false}>
                <button onClick={searchBar} className="searchbtn">Search</button>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}>
                    <Popup>
                        Currency  : {currency}<br/>
                        Speed     : {speed}<br/>
                        Distance  : {distance}<br/>
                        Volume    : {volume}<br/>
                        Time-Zone : {timezone} 
                    </Popup>
                </Marker>
                <CentreMapView coords={[latitude,longitude]}></CentreMapView>
            </MapContainer>
        </div>
    )
}

export default Main;