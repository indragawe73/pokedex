  let backendHost;
  const hostname = window && window.location && window.location.hostname;

  if(hostname === 'bbone.bluebird.id') {
    // backendHost = 'https://pokeapi.co/api/v2/';
  } else {
    backendHost = process.env.REACT_APP_BACKEND_HOST || 'https://pokeapi.co/api/v2/';
  }
  console.log('REACT_APP_API backendHost', backendHost)

  export const API_LINK = backendHost;