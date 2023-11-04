import React, {useState} from 'react';
import '../styles/MusicPlayer.css';
import volumeIcon from '../assets/images/volume-icon.png';

function MusicPlayer()
{
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };


    return (
        <div className="music-player">
          <div className="player-controls">
            <button className="play-pause-button" onClick={togglePlay}>
              <span className="play-pause-icon">
                {isPlaying ? "II" : "►"} {/* Use a fixed size for the icon */}
              </span>
            </button>
            <div className="volume-container">
              <img src={volumeIcon} alt="Volume Icon" className="volume-icon" />
              <input type="range" className="volume-slider" />
            </div>
          </div>
          <div className="playlist-display">{/* Playlist content goes here */}</div>
        </div>
      );
}

export default MusicPlayer;