import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./Player.css";
import "./Sidebar";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Player({ spotify }) {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className="player">
      <Router>
        <div className="player__body">
          <Sidebar />
          <Switch>
            <Route path="/playlists/:playlistId">
              <Body spotify={spotify} />
            </Route>
            <Route path="/" exact>
              <h1>This</h1>
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default Player;
