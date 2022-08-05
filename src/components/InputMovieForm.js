import { useState } from "react";
import axios from "axios";
import ListMovies from "./ListMovies";
import MoreMovieInfo from "./MoreMovieInfo";

const InputMovieForm = () => {
  const [inputMovie, setInputMovie] = useState("");
  const [timeOutId, setTimeOutId] = useState(); //debauncing concept
  const [MovieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [showMovie, setShowdMovie] = useState(false);
  console.log(showMovie);
  // useEffect(() => {
  const FetchMovie = async (searchmovie) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=c49790a&s=${searchmovie}`
    );
    console.log(response.data.Search);
    console.log(response);
    setMovieList(response.data.Search);
  };

  // FetchMovie(inputMovie);
  // }, [inputMovie]);

  const InputHandler = (event) => {
    clearTimeout(timeOutId);
    setInputMovie(event.target.value);
    const timeout = setTimeout(() => FetchMovie(event.target.value), 500);
    setTimeOutId(timeout);
  };

  return (
    <div className="cove__container">
      <h2>Search Movie</h2>

      <input
        type="text"
        value={inputMovie}
        placeholder="Enter Movie Title"
        onChange={InputHandler}
      />
      {showMovie && selectedMovie && (
        <MoreMovieInfo
          selectedMovie={selectedMovie}
          setShowdMovie={setShowdMovie}
        />
      )}

      {!showMovie && (
        <div className="containerMovie">
          {MovieList?.length ? (
            MovieList.map((mov) => (
              <ListMovies
                key={mov.imdbID}
                imdbID={mov.imdbID}
                Title={mov.Title}
                Poster={mov.Poster}
                Year={mov.Year}
                setSelectedMovie={setSelectedMovie}
                setShowdMovie={setShowdMovie}
              />
            ))
          ) : (
            <p> try to search movie</p>
          )}
        </div>
      )}
    </div>
  );
};
export default InputMovieForm;
