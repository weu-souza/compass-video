import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { apiOptions } from "../shared/API/Config/Config";
import axios from "axios";
import Carrossel from "../components/Carrossel";

const searchURL = 'https://api.themoviedb.org/3/search/';


interface MediaItem {
  id: string;
  poster_path: string;
  media_type:string

}


const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const type = searchParams.get("type");
  const [results, setResults] = useState<MediaItem[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getSearchedItems = async (url: string) => {
      try {
        const requestConfig = apiOptions('GET', url);
        const response = await axios.request(requestConfig);
        setResults(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };
    

    if (query && type) {
      const searchWithQueryURL = `${searchURL}/${type.toLowerCase()}?api_key=${import.meta.env.VITE_KEY}&query=${query}`;
      getSearchedItems(searchWithQueryURL);
    }
  }, [query, type]);


  const handleFilmes = (id: string) => {
    if(type === "tv" || results.find((res) => res.media_type === "tv")) {
      navigate(`/home/serie/${id}`);
    }
    if(type === "movie" || results.find((res) => res.media_type === "movie")) {
      navigate(`/home/movie/${id}`);
    }
    if(type === "collection" || results.find((res) => res.media_type === "collection")) {
      navigate(`/home/collection/${id}`);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-neutral-600">
      <div className="flex-grow flex flex-col ml-[78px] mt-16 h3-heading text-white">
        <h2>
          <span className="opacity-60">Resultados para sua busca: </span>
          <span>{query}</span>
        </h2>      
        <div className="mt-6">
          <div>
          <Carrossel data={results} redirectCollection={handleFilmes} />
          </div>
        </div>
      </div>
      <div className="mt-28">
      </div>
    </div>
  );
};

export default Search;