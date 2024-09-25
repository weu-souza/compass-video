import { useNavigate, useParams } from "react-router-dom";
import MovieHeader from "../../../components/headers-home/MovieHeader";
import Carrossel from "../../../components/Carrossel";
import { apiOptions } from "../../../shared/API/Config/Config";
import useApi from "../../../shared/API/Hooks/useApi";

interface carrossel {
  id: string;
  poster_path: string;
}
interface carrosselI {
  results:carrossel[]
}

interface genre {
  id: number;
  name: string;
}

interface Movie {
  backdrop_path: string;
  genres: genre[];
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
}

const MovieFilho = () => {
  const navigate = useNavigate();
  const SerieID = useParams();

  const options = apiOptions(
    "GET",
    `https://api.themoviedb.org/3/movie/${SerieID.id}`
  );
  const similar = apiOptions(
    "GET",
    `https://api.themoviedb.org/3/movie/${SerieID.id}/similar`
  );

  const movieHeader = useApi<Movie>(options);
  const carrosselMov = useApi<carrosselI>(similar);

  const handleFilmes = (id: string) => {
    navigate(`/home/movie/${id}`);
  };

  return (
    <div>
      <MovieHeader data={movieHeader.dados} movieCategorie={true} />
      <div className="bg-neutral-600 pb-11">
        <div className="pl-20 pb-11">
          <h3 className="h4-heading text-white pb-4">Similares</h3>
          <Carrossel data={carrosselMov.dados?.results} redirectCollection={handleFilmes} />
        </div>
      </div>
    </div>
  );
};

export default MovieFilho;
