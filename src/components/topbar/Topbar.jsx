import { Search } from "@mui/icons-material";
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
        </div>
        
    </div>
  )
}

export default Topbar