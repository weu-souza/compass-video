import { SetStateAction, useEffect, useState } from "react";
import ButtonClicked from "./ButtonClicked";
import axios from "axios";

type watchlistbtn = {
  media_id: number | undefined;
  media_type: string;
};

const WatchList = ({ media_id, media_type }: watchlistbtn) => {
    const [active, setActive] = useState(false);
    const [filmesVerDepois, setFilmesVerDepois] = useState<number[]>([]);
    const [seriesVerDepois, setSeriesVerDepois] = useState<number[]>([]);
  
    useEffect(() => {
      const sessionId = localStorage.getItem("sessionId");
      if (sessionId) {
        fetchList(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_account_id}/watchlist/movies`, setFilmesVerDepois);
        fetchList(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_account_id}/watchlist/tv`, setSeriesVerDepois);
      } else {
        console.error('sessionId não encontrado no localStorage');
      }
    }, []);
  
    useEffect(() => {
      setActive(filmesVerDepois.includes(media_id) || seriesVerDepois.includes(media_id));
    }, [filmesVerDepois, seriesVerDepois, media_id]);
  
    const watchlistOptions = {
      method: "POST",
      url: `https://api.themoviedb.org/3/account/${import.meta.env.VITE_account_id}/watchlist`,
      params: { session_id: localStorage.getItem("sessionId") },
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
      },
      data: {
        media_type: media_type,
        media_id: media_id,
        watchlist: !active, 
      },
    };
  
    const fetchList = async (url: string, stateUpdater: React.Dispatch<SetStateAction<number[]>>) => {
      try {
        const response = await axios.get(url, {
          params: {
            language: 'en-US',
            page: '1',
            session_id: localStorage.getItem("sessionId"),
            sort_by: 'created_at.asc',
          },
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_KEY}`,
          },
        });
        stateUpdater(response.data.results.map(item => item.id)); 
      } catch (error) {
        console.error(`Erro ao buscar ${url}:`, error);
      }
    };
  
    const handleActive = () => {
      axios.request(watchlistOptions)
        .then(function (response) {
        //   console.log(response.data);
          setActive(!active);
        })
        .catch(function (error) {
        //   console.error(error);
        });
    };
  

  
  return (
    <div>
      <ButtonClicked
        active={active}
        handleActive={handleActive}
        classChildren={"fa-solid fa-plus fa-lg"}
        className={
          "bg-opacity-black-10 border col-span-1 border-white rounded-full px-6 py-5 text-white hover:text-black"
        }
      />
    </div>
  );
};

export default WatchList;
