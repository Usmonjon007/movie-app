import { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all",
    };
  }

  searchHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilter = (e) => {
    this.setState({ [e.target.name]: e.target.dataset.type }, () => {
      this.props.searchMovie(this.state.search, this.state.type);
    });
  };

  render() {
    return (
      <div className="search">
        <input
          id="search"
          type="search"
          placeholder="Search. . ."
          onChange={this.searchHandler}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (this.state.search !== "") {
                this.props.searchMovie(this.state.search, this.state.type);
              }
            }
          }}
          value={this.state.search}
          name="search"
        />
        <button
          className="btn search-btn"
          onClick={() => {
            if (this.state.search !== "") {
              this.props.searchMovie(this.state.search, this.state.type);
            }
          }}
          type="button"
        >
          Search
        </button>
        <div>
          <label>
            <input
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
