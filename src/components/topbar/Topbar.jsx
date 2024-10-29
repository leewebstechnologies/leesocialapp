import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./topbar.css";



const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarLeft">
            <span className="logo">facebook</span>
        </div>
        <div className="topbarCenter">
            <Search />
            <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="./assets/person/11.jpg" alt="profile_image" className="topbarImage" />
        </div>
        
    </div>
  )
}

export default Topbar