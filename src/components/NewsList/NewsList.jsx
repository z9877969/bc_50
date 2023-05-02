import PropTypes from "prop-types";
import noImage from "../../assets/images/no-image.png";
import s from "./NewsList.module.scss";

const NewsList = ({ news, openModal }) => {
  return (
    <ul className={s.news}>
      {news.map((item, idx) => (
        <li
          key={idx}
          className={s.itemWrapper}
          onClick={() => openModal({ title: item.title, urlToNews: item.url })}
        >
          <div className={s.item}>
            <img
              className={s.img}
              src={item.urlToImage ? item.urlToImage : noImage}
              alt=""
            />
            <div className={s.textWrapper}>
              <h3 className={s.title}>{item.title}</h3>
              <p className={s.author}>{item.author}</p>
              <p className={s.date}>{item.publishedAt}</p>
              <p className={s.descr}>{item.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
