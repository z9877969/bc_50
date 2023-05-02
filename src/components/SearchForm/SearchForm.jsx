import { Component } from "react";
import s from "./SearchForm.module.scss";

// = ({ onSubmit }) =>
class SearchForm extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setQuery(this.state.input);
    // this.props.setQuery(e.target.elements.input.value);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="input"
          value={this.state.input}
          placeholder="Search..."
          onChange={(e) => this.setState({ input: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SearchForm;
