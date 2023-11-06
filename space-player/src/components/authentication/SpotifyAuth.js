// SpotifyAuth.js

// Function to initiate the Spotify login flow
export const initiateSpotifyLogin = () => {
    const redirectUri = 'http://localhost:3000/callback'; 
    const scopes = 'user-read-private'; // Replace with the desired scopes
    const clientId = 'aff230c795e442cebe5c2b5275d10980'; // Replace with your Spotify client ID
  
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token`;
  
    // Redirect the user to the Spotify authorization page
    window.location.href = authUrl;
  };
  