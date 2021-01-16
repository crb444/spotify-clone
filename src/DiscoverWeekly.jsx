import React, { useContext } from "react";
import "./DiscoverWeekly.css";
import Header from "./Header";
import { UserContext } from "./UserContext";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function DiscoverWeekly({ spotify }) {
  const [user, setUser] = useContext(UserContext);

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
    <div className="discoverweekly">
      {console.log(user.discoverWeekly?.tracks?.items)}
      <Header />
      <div className="discoverweekly__playlist">
        <div className="discoverweekly__playlistLeft">
          <img src={user.discoverWeekly?.images[0]?.url} />
        </div>
        <div className="discoverweekly__playlistRight">
          <h4>PLAYLIST</h4>
          <h1>{user.discoverWeekly?.name}</h1>
          <h4>{user.discoverWeekly?.description}</h4>
        </div>
      </div>
      <div className="discoverweekly__controls">
        <PlayCircleFilledWhiteIcon className="discoverweekly__controlsGreenPlay" />
        <FavoriteIcon className="discoverweekly__controlsGreenFav" />
        <MoreHorizIcon className="discoverweekly__controlsGray" />
      </div>
      <div className="discoverweekly__songlist">
        {user.discoverWeekly?.tracks?.items?.map((track) => {
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
      </div>
    </div>
  );
}

export default DiscoverWeekly;
