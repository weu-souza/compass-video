import Carrossel from "../../../components/Carrossel";
import MovieHeader from "../../../components/headers-home/MovieHeader";
import useApi from "../../../shared/API/Hooks/useApi";
import { useNavigate } from "react-router-dom";
import { apiOptions } from "../../../shared/API/Config/Config";
interface carrossel {
  id: string;
  poster_path: string;
}
interface carrosselI {
  results:carrossel[]
}

interface Movie{
  backdrop_path:string
  genres:genre[]
  original_title:string
  overview:string
  release_date:string
  runtime:number

}
interface genre{
  id:number,
  name:string
  }
const Movie = () => {
  const navigate = useNavigate()

  const movieHeader = apiOptions(
    "GET",
    `https://api.themoviedb.org/3/movie/573435`
  );
   

  const options = apiOptions(
    "GET",
    "https://api.themoviedb.org/3/movie/popular"
  );
 const handleFilmes = (id: string) => {
  navigate(`/home/movie/${id}`);
};


  const dataHeader = useApi<Movie>(movieHeader);
  const carrossel = useApi<carrosselI>(options);
  return (
    <div>
      <MovieHeader data={dataHeader.dados} movieCategorie={false} />
      <div className="bg-neutral-600 pb-11">
        <div className="ml-16 pt-2">
          <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Lançamentos</h4>
            <div>
              <Carrossel data={carrossel.dados?.results} redirectCollection={handleFilmes}/>{" "}
            </div>
            <h4 className="h4-heading text-white">Populares</h4>
            <div>
              <Carrossel data={carrossel.dados?.results} redirectCollection={handleFilmes}/>{" "}
            </div>
            <h4 className="h4-heading text-white">Mais bem avaliados</h4>
            <div>
              <Carrossel data={carrossel.dados?.results} redirectCollection={handleFilmes}/>{" "}
            </div>
            <h4 className="h4-heading text-white">Em breve</h4>
            <div>
              <Carrossel data={carrossel.dados?.results} redirectCollection={handleFilmes}/>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
