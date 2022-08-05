import axios from "axios";

import { useEffect, useState } from "react";
const MoreMovieInfo = (props) => {
  const [datas, setDetas] = useState("");
  console.log(props);
  const selectedId = props.selectedMovie;
  console.log(selectedId);
  useEffect(() => {
    const FetchDataById = async (selectedId) => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=c49790a&i=${selectedId}`
      );
      //.then((response) => setDetas(response.data));
      setDetas(response.data);
      console.log(response.data);
    };
    FetchDataById(selectedId);
  }, [selectedId]);
  //console.log(datas);

  console.log(typeof props.selectedMovie);
  //const { Genre, Actors, Director, released, Country, Runtime } = props;

  return (
    <div
      className="Movie_info"
      onClick={() => {
        props.setShowdMovie(!true);
      }}
    >
      <div className="closemodal">X</div>
      <div className="info">
        <h1>Title :{datas.Title}</h1>
        <h2>Year :{datas.Year}</h2>
        <h2>Rated :{datas.Rated}</h2>
        <h2>Writer :{datas.Writer}</h2>
        <h2>Actors :{datas.Actors}</h2>
        <h2>Voted :{datas.imdbVotes}</h2>

        <h2>Country:{datas.Country}</h2>
        <p>
          <em>{datas.Plot}</em>
        </p>
      </div>
      <div>
        <img className="picture" src={datas.Poster} alt="poster" />
      </div>
    </div>
  );
};
export default MoreMovieInfo;
