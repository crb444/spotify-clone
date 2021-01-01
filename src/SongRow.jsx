import React from "react";
import "./SongRow.css";

function SongRow({ title, artist, albumSrc, playSong, songId }) {
  return (
    <div className="songrow">
      <div className="songrow__left">
        <img src={albumSrc} />
      </div>
      <div className="songrow__right">
        <h4>{title}</h4>
        {artist.map((artist) => {
          return <p>{artist.name}</p>;
        })}
        <button onClick={() => playSong(songId)}>Play</button>
      </div>
    </div>
  );
}

export default SongRow;
