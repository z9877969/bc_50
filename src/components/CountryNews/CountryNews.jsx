import { useEffect, useState } from "react";

import NewsList from "../NewsList/NewsList";
import { getCountryNewsApi } from "../../services/newsApi";
import { useParams } from "react-router-dom";

const CountryNews = () => {
  const { country } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const news = await getCountryNewsApi(country);

        setNews(news);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNews();
  }, [country]);

  const filteredNews = news.filter((el) => el);

  return <NewsList news={filteredNews} />;
};

export default CountryNews;
