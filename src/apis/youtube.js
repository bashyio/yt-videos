import axios from "axios";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

youtube.KEY = "AIzaSyD7Tlaqpzlgp7PeWGys8BES7GYFbCSlPrA";

export default youtube;
