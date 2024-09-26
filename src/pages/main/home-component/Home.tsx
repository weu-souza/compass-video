import Carrossel from "../../../components/Carrossel";
import { apiOptions } from "../../../shared/API/Config/Config";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../../components/headers-home/HomeHeader";
interface carrossel {
  id: string;
  poster_path: string;
}
interface data {
  results:carrossel[]
}
import useApi from "../../../shared/API/Hooks/useApi";
import serie from "../../../Serie";
const Home = () => {
  const navigate = useNavigate();

  const headerOpt = apiOptions("GET", `https://api.themoviedb.org/3/tv/94997`);
  const homeHeader = useApi<serie|null>(headerOpt);

  const serieOptions = apiOptions(
    "GET",
    "https://api.themoviedb.org/3/tv/airing_today"
  );

  const  serie  = useApi<data | null>(serieOptions);

  const collectionsOpt = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/collection",
    params: {
      query: "horror",
      include_adult: "false",
      language: "en-US",
      page: "2",
    },
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${import.meta.env.VITE_KEY}`,
    },
  };

  const  collection  = useApi<data | null>(collectionsOpt);
  

  const movieOpt = apiOptions(
    "GET",
    "https://api.themoviedb.org/3/movie/now_playing"
  );
  const  movie  = useApi<data | null>(movieOpt);

  const handleCollection = (id: string) => {
    // console.log("collection",id);
    navigate(`/home/collection/${id}`);
  };

  const handleSeries = (id: string) => {
    navigate(`/home/serie/${id}`);
  };
  const handleFilmes = (id: string) => {
    navigate(`/home/movie/${id}`);
  };

  return (
    <div>
      <HomeHeader serie={homeHeader?.dados} />
      <div className=" bg-neutral-600 pb-11 ">
        <div className="ml-16 pt-2">
          <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Coleções de halowen</h4>
            <div>
              <Carrossel
                data={collection.dados?.results}
                redirectCollection={handleCollection}
              />
            </div>
            <h4 className="h4-heading text-white">Séries em alta</h4>
            <div>
              <Carrossel data={serie.dados?.results} redirectCollection={handleSeries} />
            </div>
            <h4 className="h4-heading text-white">Filmes em alta</h4>
            <div>
              <Carrossel data={movie.dados?.results} redirectCollection={handleFilmes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
