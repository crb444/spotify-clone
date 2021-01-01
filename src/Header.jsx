import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { UserContext } from "./UserContext";

function Header() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for songs, artists, albums" />
      </div>
      <div className="header__right">
        <Avatar alt="CB" sizes="small" />
        <h4>{user?.userDetails?.display_name}</h4>
        <ExpandMoreIcon />
        {console.log(user)}
      </div>
    </div>
  );
}

export default Header;
