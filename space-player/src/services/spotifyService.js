import SpotifyWebApi from 'spotify-web-api-js';

/*
 This module can include functions to make API requests, such as fetching user playlists, searching for tracks, and controlling playback.
*/


const spotifyApi = new SpotifyWebApi();

export const authenticateWithSpotify = (accessToken) => {
    spotifyApi.setAccessToken(accessToken);
};

export const searchTracks = (query) => {
    return spotifyApi.searchTracks(query);
  };
  
  export const playTrack = (trackId) => {
    // Implement logic to play the selected track using the Spotify API
  };


  // Function to initialize the Spotify SDK
export const initializeSpotifySDK = (accessToken) => {
  return new Promise((resolve, reject) => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Player',
        getOAuthToken: (cb) => cb(accessToken),
      });

      // Add event listeners and handle playback controls here
      
      player.connect().then((success) => {
        if (success) {
          console.log('Spotify SDK connected successfully.');
          resolve(player);
        } else {
          reject(new Error('Failed to connect to Spotify SDK.'));
        }
      });
    };

    // Load the SDK script
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);
  });
};