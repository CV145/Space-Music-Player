// SpotifyPlayerContainer.js

import React, { useState, useEffect } from 'react';
import { initializeSpotifySDK } from '../services/spotifyService';
import SpaceBackground from './SpaceBackground';
import {getAccessTokenFromRedirectURI} from './authentication/SpotifyAuth'
import MusicPlayer from './MusicPlayer';
import Search from './Search';

function SpotifyPlayerContainer() {
    const [accessToken, setAccessToken] = useState(null);


    // Initialize the Spotify SDK when your application starts
window.onSpotifyWebPlaybackSDKReady = () => {
  const token = '[Your access token]';
  const player = new window.Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5
  });
}

    //Called when components renders or re-renders
  useEffect(() => {
    const accessToken = getAccessTokenFromRedirectURI();
    setAccessToken(accessToken);

    initializeSpotifySDK(accessToken)
      .then((player) => {
        // Do something with the player (e.g., add event listeners)
      })
      .catch((error) => {
        console.error('Error initializing Spotify SDK:', error);
      });
  }, []);

  return (
    <div>
      <MusicPlayer accessToken={accessToken}/>
      <Search accessToken={accessToken}/>
    </div>
  );
}

export default SpotifyPlayerContainer;
