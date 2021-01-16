const clientID = "d0163fe72e61466e8acd8197f6d3d792";
// const redirectURI = "https://spotify-clone-crb444.netlify.app/";
const redirectURI = "http://localhost:3000/";

export const authEndPoint = "https://accounts.spotify.com/authorize";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginURL = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getToken = () => {
  const token = window.location.hash.split("&")[0];
  const finalToken = token.split("#access_token=")[1];

  return finalToken;
};
