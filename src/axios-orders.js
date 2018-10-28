import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-ba4df.firebaseio.com/"
});

export default instance;
