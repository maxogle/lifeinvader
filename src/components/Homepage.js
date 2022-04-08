import Timeline from "./Timeline"
import Sidebar from "./Sidebar"
import NavBar from "./NavBar"
//https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json michaels mock JSON







const Homepage = () => {
    return(
        <div>
            <NavBar />
            <Timeline />
            <Sidebar />
        </div>
    )
}

export default Homepage