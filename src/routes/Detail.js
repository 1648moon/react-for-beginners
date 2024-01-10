import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data);

    console.log(json.data);
  };
  useEffect(async () => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
