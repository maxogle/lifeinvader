import Timeline from "./Timeline"
import Sidebar from "./Sidebar"
//https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json  michaels mock JSON







const Homepage = () => {
    return(
        <div>
            <h2>Welcome to Lifeinvader</h2>
            <Timeline />
            <Sidebar />
        </div>
    )
}

export default Homepage