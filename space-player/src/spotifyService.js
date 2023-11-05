import SpotifyWebApi from 'spotify-web-api-js';

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