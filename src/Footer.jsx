import React from "react";
import "./Footer.css";
import RepeatIcon from "@material-ui/icons/Repeat";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Usher_-_Confessions_album_cover.jpg/220px-Usher_-_Confessions_album_cover.jpg" />
        <div className="footer__songinfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <RepeatIcon className="footer__iconGreen" />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon fontSize="large" />
        <SkipNextIcon />
        <ShuffleIcon className="footer__iconGreen" />
      </div>
      <div className="footer__end">
        <VolumeDown className="footer__volumeIcon" />
        <Slider />
        <VolumeUp className="footer__volumeIcon" />
      </div>
    </div>
  );
}

export default Footer;
