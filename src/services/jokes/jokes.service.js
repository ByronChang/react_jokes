import axios from "axios";
const API_URI = "https://icanhazdadjoke.com/search";
const API_URI_RANDOM = "https://icanhazdadjoke.com/";
const API_URI_SEARCH = "https://icanhazdadjoke.com/search?term=";

const getFullContent = (word) => {
  let request="";

  word.trim() !== "" ?    
    request = axios.get(API_URI_SEARCH + word, {headers:{'Accept': 'application/json'}})
  :
    request = axios.get(API_URI, {headers:{'Accept': 'application/json'}})
  return request;
};

const getRandomContent = () => {
  let request="";
    request = axios.get(API_URI_RANDOM, {headers:{'Accept': 'application/json'}}) 
    return request;
};

export default {
  getFullContent,
  getRandomContent
};