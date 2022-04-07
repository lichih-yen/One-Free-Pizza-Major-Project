import axios from "axios";

const instance = axios.create({
  baseURL: "https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api",
  timeout: 5000,
  headers: { Authorization: "basic d5b11d03-7e29-4e62-8afd-0722912a3e3b" },
});

export default instance;
