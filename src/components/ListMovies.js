const ListMovies = (props) => {
  console.log(props);
  return (
    <div
      className="movieCard"
      onClick={() => {
        props.setSelectedMovie(props.imdbID);
      }}
    >
      <div
        className="discription"
        onClick={() => {
          props.setShowdMovie(!false);
        }}
      >
        <div className="more__description">
          <h1>{props.Title}</h1>
          <h3>{props.Year}</h3>
        </div>
        <img className="pic" src={props.Poster} alt="poster" />
      </div>
    </div>
  );
};
export default ListMovies;
