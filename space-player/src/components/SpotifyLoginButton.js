// SpotifyLoginButton.js
import React from 'react';
import '../styles/SpotifyLoginButton.css';

const SpotifyLoginButton = ({ onLoginClick }) => {
  const spotifyLogo = '../assets/images/spotify.png';

  return (
    <button onClick={onLoginClick} className="spotify-login-button">
      <img src={spotifyLogo} alt="Spotify Logo" />
    </button>
  );
};

export default SpotifyLoginButton;
