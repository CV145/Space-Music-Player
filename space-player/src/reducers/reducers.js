  
  // reducers.js
  const initialState = {
    trackId: null,
    accessToken: null,
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TRACK_ID':
        return { ...state, trackId: action.payload };
      case 'SET_ACCESS_TOKEN':
        return { ...state, accessToken: action.payload };
      default:
        return state;
    }
  };
  