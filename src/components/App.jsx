import { Component } from "react";
import NewsPage from "./NewsPage/NewsPage";
import SearchForm from "../components/SearchForm/SearchForm";

class App extends Component {
  state = {
    query: "",
  };

  setQuery = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <SearchForm setQuery={this.setQuery} />
        <NewsPage query={this.state.query} />
      </>
    );
  }
}

export default App;
