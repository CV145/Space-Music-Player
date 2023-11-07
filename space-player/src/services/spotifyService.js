import SpotifyWebApi from 'spotify-web-api-js';
import axios from 'axios';

/*
 This module can include functions to make API requests, such as fetching user playlists, searching for tracks, and controlling playback.
*/


const spotifyApi = new SpotifyWebApi();

export const authenticateWithSpotify = (accessToken) => {
    spotifyApi.setAccessToken(accessToken);
};

/*
Returns a object with info about the tracks matching a search query. Tracks is an array of track objects and those contain the track_id
*/
export const searchTracks = (query) => {
    return spotifyApi.searchTracks(query);
  };
  
  export const playTrack = (trackId, accessToken) => {
    const url = 'https://api.spotify.com/v1/me/player/play';
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    const data = {
      uris: [`spotify:track:${trackId}`], // Convert the trackId to a Spotify URI
    };
  
    axios
      .put(url, data, { headers })
      .then((response) => {
        // Playback started successfully
        console.log('Track playback started:', response);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error starting playback:', error);
      });
  };

  const fetchRandomTrack = async (accessToken) => {
    
    // Determine the total number of tracks in the catalog (you can get this from the API as well)
    const totalTracks = 1000000; // Replace with the actual count
  
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * totalTracks);
  
    // Make the API request
    const response = await fetch(`https://api.spotify.com/v1/tracks/${randomIndex}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
  
    if (response.status === 200) {
      const data = await response.json();
      const trackId = data.id;
      return trackId;
    } else {
      console.error('Failed to fetch a random track.');
      return null;
    }
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