//A component to handle the Spotify callback after user authentication
//This component will extract the access token from the URL query parameters and manage the token retrieval process

import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Callback = () => {
    const history = useHistory();
  
    useEffect(() => {

        //Extract access token from url
      const queryParams = new URLSearchParams(window.location.search);
      const accessToken = queryParams.get('access_token');
  
      // Check if an access token was retrieved
      if (accessToken) {
        // Store the access token securely (you can use local storage, a server, or another secure method)
        // You can also handle token refreshing here if needed
  
        // Redirect to the main application
        history.push('/');
      } else {
        // Handle the case where there is no access token or an error occurred
        // You can redirect to an error page or display an error message to the user
      }
    }, [history]);
  
    return <div>Handling Spotify callback...</div>;
  };
  
  export default Callback;