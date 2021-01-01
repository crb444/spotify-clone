import "./App.css";
import Login from "./Login";
import { useEffect, useState, useContext } from "react";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { UserContext, UserProvider } from "./UserContext";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [user, setUser] = useContext(UserContext);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const _token = getToken();

    if (_token != "") {
      spotify.setAccessToken(_token);
      setToken(_token);
      spotify.getMe().then((res) =>
        setUser((prevState) => {
          return { ...prevState, token: _token, userDetails: res };
        })
      );

      spotify.getUserPlaylists().then((res) =>
        setUser((prevState) => {
          return { ...prevState, userPlaylists: res.items };
        })
      );

      spotify.getPlaylist("37i9dQZEVXcJvQLiF17lJW").then((playlist) =>
        setUser((prevState) => {
          return { ...prevState, discoverWeekly: playlist };
        })
      );

      spotify.getMyDevices().then((res) => console.log(res));

      window.location.hash = "";
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
