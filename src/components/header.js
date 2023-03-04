import "../components/style.css";
import Leftarrow from "../images/arrow.png"
const Header = ()=>{

    function sBar(value){     //for collapsible sidebar
        if(value==="arrow"){
            document.querySelector(".hb").style.visibility = "visible";
        document.querySelector(".sidebar").style.display = "none";
        document.querySelector(".header").querySelector("img").style.display = "none";
        }else{
            document.querySelector(".hb").style.visibility = "hidden";
        document.querySelector(".sidebar").style.display = "flex";
        document.querySelector(".header").querySelector("img").style.display = "block";
        }
        
    }

    //it toggle b/w login/logout
    function toggleProfile(value){
        if(value==="login"){
            document.querySelector(".hs1").style.display = "none";
            document.querySelector(".hs2").style.display = "block"
        }else{
            document.querySelector(".hs1").style.display = "block";
            document.querySelector(".hs2").style.display = "none"
        }
    }

    return(
        <div className = "item header">
            <div onClick={sBar}className="hb">
                <p></p>
                <p></p>
                <p></p>
            </div>
            <img draggable="false" value="back" onClick={(e)=>{sBar(e.target.alt)}} src= {Leftarrow} alt="arrow"></img>
            <h1>Map - UI</h1>
            <div className="hs hs1"><button onClick={(e)=>{toggleProfile(e.target.value)}} value="login">Log in</button></div>
            <div className="hs hs2">
                <button>Profile</button>
                <button onClick={(e)=>{toggleProfile(e.target.value)}} value="Logout">Log out</button>
            </div>
        </div>
    )
}

export default Header;