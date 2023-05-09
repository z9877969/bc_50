import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

import NewsList from "../NewsList/NewsList";
import { getSearchedNewsApi } from "../../services/newsApi";

const SearchedNews = () => {
  //   const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const [news, setNews] = useState([]);

  //   console.log("location :>> ", location.search);
  const query = search.get("query");
  const page = search.get("page");

  const handleChangePage = () => {
    setSearch({ query, page: Number(page) + 1 });
  };

  useEffect(() => {
    console.log("page :>> ", page);
    query &&
      getSearchedNewsApi(query, page)
        .then((news) => setNews(news))
        .catch((err) => console.log(err.message));
  }, [query, page]);

  return (
    <>
      <NewsList news={news} />
      <button type="button" onClick={handleChangePage}>
        Load More
      </button>
    </>
  );
};

export default SearchedNews;
