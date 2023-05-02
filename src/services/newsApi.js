import axios from "axios";

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6
export const getSearchedNewsApi = (query, page = 1) => {
  return axios
    .get("https://newsapi.org/v2/everything", {
      params: {
        q: query,
        page: page,
        pageSize: 10,
        apiKey: API_KEY,
      },
    })
    .then((res) => res.data);
};
