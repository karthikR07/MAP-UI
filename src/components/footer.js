import "../components/style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCopyright} from "@fortawesome/free-solid-svg-icons"

//footer component
const Footer = ()=>{
    return(
        <div className="item footer"> 
            <h3>All rights reserved @ MAP-UI |<FontAwesomeIcon  icon={faCopyright} /> Copyrights </h3>
        </div>
    )
}

export default Footer;