const NewsList = ({ news }) => {
  return (
    <ol>
      {news.map((el, idx) => (
        <li key={idx}>
          <a href={el.url}>
            <h4>{el.title}</h4>
          </a>
        </li>
      ))}
    </ol>
  );
};

export default NewsList;
