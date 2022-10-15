import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.setState({
      movies: [
        {
          Title: "Search any movie",
          Year: new Date().getFullYear(),
          imdbID: 1,
          Type: "Search movie",
          Poster:
            "http://image.tmdb.org/t/p/w1280/wmlvFD02YkAy0M3sjAnw0vgebtA.jpg",
        },
      ],
      loading: false,
    });
  }

  searchMovie = (movieName, movieType = "series") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=7073e4a&s=${movieName}${
        movieType !== "all" ? `&type=${movieType}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "False") {
          return this.setState({
            movies: [
              {
                Title: "Movie not found",
                Year: new Date().getFullYear(),
                imdbID: 1,
                Type: "Not found",
                Poster:
                  "https://b7.pngbarn.com/png/238/698/logo-brand-white-musical-ensemble-font-find-png-clip-art.png",
              },
            ],
            loading: false,
          });
        } else {
          return this.setState({ movies: data.Search, loading: false });
        }
      });
  };

  componentDidUpdate() {
    // console.clear();
  }

  render() {
    return (
      <div className="content container">
        <Search searchMovie={this.searchMovie} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
