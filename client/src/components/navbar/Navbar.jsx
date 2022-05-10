import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <span className="logo">Let's Socialize</span>
        </div>
        <div className="navbarCenter">
          <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input
              placeholder="search for a friend,post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarLinks">
            <span className="navbarLink">Homepage</span>
            <span className="navbarLink">Timeline</span>
          </div>
          <div className="navIcons">
            <div className="navbarIconItem">
              <PersonIcon />
              <span className="navIconBadge">5</span>
            </div>
            <div className="navbarIconItem"></div>
            <div className="navbarIconItem">
              <ChatIcon />
              <span className="navIconBadge">5</span>
            </div>
            <div className="navbarIconItem">
              <NotificationsIcon />
              <span className="navIconBadge">5</span>
            </div>
          </div>
          <img src="/assets/person/kedar.jpg" alt="" className="navbarImage" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
