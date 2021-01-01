import React, { useContext, useState, useEffect } from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { UserContext } from "./UserContext";
import { useParams } from "react-router-dom";

function Body({ spotify }) {
  const [user, setUser] = useContext(UserContext);
  const [playlist, setPlaylist] = useState(null);
  const { playlistId } = useParams();

  useEffect(() => {
    spotify.getPlaylist(playlistId).then((playlist) => setPlaylist(playlist));
  }, [playlistId]);

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log(r);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="body">
      <Header />
      <div className="body__playlist">
        <div className="body__playlistLeft">
          <img src={playlist?.images[0]?.url} />
        </div>
        <div className="body__playlistRight">
          <h4>PLAYLIST</h4>
          <h1>{playlist?.name}</h1>
          <h4>{playlist?.description}</h4>
        </div>
      </div>
      <div className="body__controls">
        <PlayCircleFilledWhiteIcon className="body__controlsGreenPlay" />
        <FavoriteIcon className="body__controlsGreenFav" />
        <MoreHorizIcon className="body__controlsGray" />
      </div>
      <div className="body__songlist">
        {playlist?.tracks?.items?.map((track) => {
          return (
            <SongRow
              title={track.track?.name}
              albumSrc={track.track?.album?.images[0]?.url}
              artist={track.track?.artists}
              playSong={playSong}
              songId={track.track?.id}
            />
          );
        })}
        {console.log(user)}
      </div>
    </div>
  );
}

export default Body;
