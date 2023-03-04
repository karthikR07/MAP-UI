import "../components/style.css"

//sidebar component
const Sidebar = ()=>{
    return(
        <div className="item sidebar">
            <h2>Menu</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Locate</li>
                <li>Help</li>
            </ul>
        </div>
    )
}

export default Sidebar;