import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-tactical-oxide-388301.cloudfunctions.net/function-1'
  //'https://us-central1-tactical-oxide-388301.cloudfunctions.net/function-1'
 

});

export default instance;
