import axios from "axios";

const instance = axios.create({
  baseURL: "https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api",
  timeout: 5000,
  headers: { Authorization: "basic cf4b1151-cf48-45ff-a897-7cb896ac94bf" },
});

export default instance;
