import { useNavigate, useSearchParams } from "react-router-dom";

import { useState } from "react";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();

//   const handleNavigate = () => {
//     // navigate("/search-news?color=red&id=21");
//     navigate(
//       {
//         pathname: "/search-news", // new location
//         search: "d=21",
//       },
//       {
//         state: "info about last location",
//       }
//     );
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ query: input, page: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <button type="button" onClick={handleNavigate}>
        Click
      </button> */}
      <input
        type="text"
        name="input"
        value={input}
        placeholder="Input search"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ok</button>
    </form>
  );
};

export default SearchForm;
