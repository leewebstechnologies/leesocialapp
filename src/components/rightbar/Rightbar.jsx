import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({profile}) => {

  const HomeRightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="./assets/gift.png" alt="birthdayImg" />
          <span className="birthdayText"><b>Vladimir Putin</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src="./assets/ad.png" alt="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u => (
            <Online key={u.id} user={u} />
          )))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4>User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">Nigeria</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
  
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/person/14.jpg" alt="" />
            <span className="rightbarFollowingName">Bola Tinubu</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/person/15.jpg" alt="" />
            <span className="rightbarFollowingName">M. Salman</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/person/16.jpg" alt="" />
            <span className="rightbarFollowingName">Joe Biden</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/person/17.jpg" alt="" />
            <span className="rightbarFollowingName">M. Zayed</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/person/12.jpg" alt="" />
            <span className="rightbarFollowingName">Vladimir Putin</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="./assets/person/6.jpeg" alt="" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       <ProfileRightbar />
      </div>
    </div>
  )
}

export default Rightbar