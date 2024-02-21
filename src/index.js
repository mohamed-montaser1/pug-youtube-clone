import "./scss/style.scss";
import "./index.pug";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min";

const apiKey = "AIzaSyAD1bwkpRfnRQ2v6WCJLOO8269NHyF9p6Q";
const videoDuration = "long";
const type = "video";
const query = "Learn Web Development".replaceAll(" ", "%20");
const part = "snippet,id";
const maxResults = "10";
const apiLink = "https://www.googleapis.com/youtube/v3/search";
const apiUrl = `${apiLink}?q=${query}&type=${type}&videoDuration=${videoDuration}&key=${apiKey}&part=${part}&order=date&maxResults=${maxResults}`;
