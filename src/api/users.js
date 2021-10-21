import axios from "axios";

const userAPI = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export { userAPI };
