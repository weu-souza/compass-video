import { apiImageUrl } from "../../shared/API/Config/Config";
import Header from "../../shared/header/Header";
// import Celebrity from "./celebrity-component/Celebrity";
import Footer from "../../shared/footer/Footer";
import { Navigate, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { apiOptions } from "../../shared/API/Config/Config";

import serie from "../../shared/API/Model/Serie";
import useApi from "../../shared/API/Hooks/useApi";
import SerieMovieTitle from "../../components/headers-home/SerieMovieTitle";
import { useEffect, useState } from "react";
import { OptionsType } from "../../shared/Types/Types";
import axios from "axios";

interface apiTeste {
  texto:serie
  img: string | serie | null;
}

interface components{
  movieOrSerie:boolean
  showMovieOrSerie:boolean
}
const Main = () => {
  const storage = window.localStorage.getItem("token");
 

  useEffect(() => {
    const loginMethod: string | null = window.localStorage.getItem("loginMethod");

    if (loginMethod === "tmdb"){
      const storage: string | null = window.localStorage.getItem("token");
      const options = {
      method: "POST",
      url: "https://api.themoviedb.org/3/authentication/session/new",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          `Bearer ${ import.meta.env.VITE_KEY}`,
      },
      data: { request_token: storage },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        window.localStorage.setItem("sessionId", response.data.session_id);
      })
      .catch(function (error) {
        // console.error(error);
      });
    } else if (loginMethod === "guest") {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/authentication/guest_session/new',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ import.meta.env.VITE_KEY}`
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
            window.localStorage.setItem("guestId", response.data.guest_session_id);
        })
        .catch(function (error) {
          console.error(error);
        });
      }
  }, []);

  const [serie, setSerie] = useState<apiTeste | null>();
  const [option, setOption] = useState<OptionsType | undefined>();
  const [components,setComponents] = useState<components>()
  const { dados } = useApi<serie>(option);

  const SerieID = useParams();

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/home": {
        setOption(apiOptions("GET", `https://api.themoviedb.org/3/tv/94997`));

        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:false
        })
        return;
      }

      case "/home/serie": {
        setOption(apiOptions("GET", "https://api.themoviedb.org/3/tv/94954"));

        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie:true,
          showMovieOrSerie:true
        })
        return;
      }

      case "/home/movie": {
        
        setOption(apiOptions("GET", `https://api.themoviedb.org/3/movie/573435'`));

        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:true
        })
        return;
      }
      case "/home/celebrity": {
        setOption(apiOptions("GET", `https://api.themoviedb.org/3/tv/235484'`));
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:false
        })
        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }
      case `/home/serie/${SerieID.id}`: {
        setOption(
          apiOptions("GET", `https://api.themoviedb.org/3/tv/${SerieID.id}`)
        );
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:false
        })
        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }
      case `/home/serie/${SerieID.id}/${SerieID.season_number}`: {
        setOption(
          apiOptions("GET", `https://api.themoviedb.org/3/tv/${SerieID.id}`)
        );
        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:false
        })
        return;
      }
      case `/home/collection/${SerieID.id}`: {
        setOption(
          apiOptions(
            "GET",
            `https://api.themoviedb.org/3/collection/${SerieID.id}`
          )
        );
        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:false
        })
        return;
      }
      case `/home/movie/${SerieID.id}`: {
        setOption(
          apiOptions(
            "GET",
            `https://api.themoviedb.org/3/movie/${SerieID.id}`
          )
        );
        setSerie({
          texto:dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:false
        })
        return;
      }
      case `/home/mylist`: {
        setOption(
          apiOptions(
            "GET",
            `https://api.themoviedb.org/3/movie/${SerieID.id}`
          )
        );
        setSerie({
          texto:dados,
          img: null,
        });
        setComponents({
          movieOrSerie:false,
          showMovieOrSerie:false
        })
        return;
      }
    }
  }, [location.pathname, SerieID, dados,]);
  return (
    <div
    className={
      "w-screen bg-no-repeat h-screen bg-cover flex flex-col justify-between pb-11 "
    }
    style={{ backgroundImage: `url(${serie?.img})` }}
  >
    <Header />
    {components?.showMovieOrSerie && <SerieMovieTitle
        serie={serie?.texto}
        children={components?.movieOrSerie ? "Séries" : "Filmes"}
      />}
    <Outlet />
    <Footer />
  </div>
  );
};

export default Main;
