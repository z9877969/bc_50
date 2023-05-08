import { useEffect, useState } from "react";

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

  useEffect(() => {
    news.length && console.log(news);
  }, [news]);

  const filteredNews = news.filter((el) => el);

  return (
    <ol>
      {filteredNews.map((el) => (
        <li>
          <a href={el.url}>
            <h4>{el.title}</h4>
          </a>
        </li>
      ))}
    </ol>
  );
};

export default CountryNews;
