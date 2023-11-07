import React, {useEffect, useState} from 'react';
import SpotifyLoginButton from './SpotifyLoginButton';
import {useDispatch} from 'react-redux';
import { setTrackId, setAccessToken } from '../actions/actions';
import '../styles/MusicPlayer.css';

import volumeIcon from '../assets/images/volume-icon.png';
import Search from './Search';

function MusicPlayer(accessToken)
{
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackId, setCurrentSong] = useState(''); //current song state

    // Dispatch actions to set track ID and access token
    //dispatch(setTrackId(trackId));
    //dispatch(setAccessToken(accessToken));


    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
        <div className="playlist-display">
          <h3>Playlist</h3>
          </div>
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
          <SpotifyLoginButton />
        </div>
      );
}

export default MusicPlayer;