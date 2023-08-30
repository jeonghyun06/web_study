import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          rating : {movie.rating}
        </div>
      )}
    </div>
  );
}
export default Detail;
