// SpotifyPlayerContainer.js

import React, { useEffect } from 'react';
import { initializeSpotifySDK } from '../services/spotifyService';
import SpaceBackground from './SpaceBackground';

function SpotifyPlayerContainer() {
  useEffect(() => {
    const accessToken = '[Your Spotify Access Token]';

    initializeSpotifySDK(accessToken)
      .then((player) => {
        // Do something with the player (e.g., add event listeners)
      })
      .catch((error) => {
        console.error('Error initializing Spotify SDK:', error);
      });
  }, []);

  return (
    // Render your entire application here, including the MusicPlayer component
    <div>
      <SpaceBackground/>
    </div>
  );
}

export default SpotifyPlayerContainer;
