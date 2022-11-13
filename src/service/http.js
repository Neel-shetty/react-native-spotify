import axios from "axios";

export default axios.create({
  baseURL: "api.genius.com/",
  headers: {
    "Content-type": "application/json"
  }
});
