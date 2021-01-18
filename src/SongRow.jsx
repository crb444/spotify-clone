import React from "react";
import "./SongRow.css";

function SongRow({ title, artist, albumSrc, playSong, songId, albumName }) {
  return (
    <div className="songrow">
      <div className="songrow__left">
        <img src={albumSrc} />
        <div className="songrow__right">
          <h4>{title}</h4>
          {artist.map((a) => {
            if (a != artist[artist.length - 1]) {
              return <small>{a.name}, </small>;
            } else {
              return <small>{a.name}</small>;
            }
          })}
        </div>
      </div>

      <div className="songrow__album">
        <p>{albumName}</p>
      </div>
    </div>
  );
}

export default SongRow;
