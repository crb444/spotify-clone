import React, { useContext } from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import SidebarOption from "./SidebarOption";
import { Divider } from "@material-ui/core";
import { UserContext } from "./UserContext";
import { NavLink, useParams } from "react-router-dom";

function Sidebar() {
  const [user, setUser] = useContext(UserContext);
  const { playlistId } = useParams();

  return (
    <div className="sidebar">
      <div className="sidebar__components">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvRhd0VO7PPVPqFPJU5YizbzS9zNvmDfCsg&usqp=CAU" />
        <div className="sidebar__options">
          <SidebarOption Icon={HomeIcon} option="Home" />
          <SidebarOption Icon={SearchIcon} option="Search" />

          <SidebarOption Icon={QueueMusicIcon} option="Your Library" />
          <h4>{user.userDetails?.display_name}</h4>
        </div>

        <div className="sidebar__playlists">
          <h4> PLAYLISTS</h4>
          <hr />
          {user.userPlaylists?.map((playlist) => {
            return (
              <NavLink
                className="sidebar__playlistName"
                to={`/playlists/${playlist.id}`}
                style={{ textDecoration: "none" }}
              >
                <h4>{playlist.name}</h4>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
