import Button from "../Button/Button";
import { Component } from "react";
import Modal from "../Modal/Modal";
import NewsList from "../NewsList/NewsList";
import { getSearchedNewsApi } from "../../services/newsApi";
import news from "../../data/news.json";

class NewsPage extends Component {
  // state = {news, isLoading} -> method for news -> fetch | method
  state = {
    news: [],
    page: 1, // 3
    query: "",
    isLoading: false,
    error: null,
    isModalOpen: false,
    dataModal: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { query } = props;
    if (query !== state.query) {
      return { page: 1, query, news: [] };
    }
    return null;
  }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight - 75.63;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      (prevProps.query !== this.props.query && this.props.query) ||
      prevState.page !== this.state.page
    ) {
      this.getSearchedNews();
    }

    if (prevState.news !== this.state.news && this.state.page !== 1) {
      console.log("scroll");
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
    }
  }

  getSearchedNews = async () => {
    this.setState({ isLoading: true });
    try {
      const data = await getSearchedNewsApi(this.props.query, this.state.page);
      this.setState((prev) => ({ news: [...prev.news, ...data.articles] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  changePage = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  openModal = (dataModal) => {
    this.setState({ dataModal });
  };

  closeModal = () => {
    this.setState({ dataModal: null });
  };

  toggleModal = (dataModal = null) => {
    this.setState({ dataModal });
  };

  render() {
    const { news, isLoading, dataModal } = this.state;
    return (
      <>
        <NewsList news={news} openModal={this.toggleModal} />
        {isLoading && <h1>Loading...</h1>}
        {news.length > 0 && <Button onClick={this.changePage} />}
        {dataModal && (
          <Modal modalData={dataModal} closeModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default NewsPage;
