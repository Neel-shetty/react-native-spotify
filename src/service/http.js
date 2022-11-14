import axios from "axios";

export default axios.create({
  baseURL: "https://api.genius.com/",
  headers: {
    "Content-type": "application/json",
    "Authorization": GENIUS_API_KEY
  }
});
