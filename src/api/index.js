import axios from "axios";

const instance = axios.create({
  baseURL: "https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api",
  timeout: 5000,
  headers: { Authorization: "basic 5bb3b207-f373-427a-a0df-e7f377f85f87" },
});

export default instance;
