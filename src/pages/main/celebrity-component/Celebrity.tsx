
import HomeHeader from "../../../components/headers-home/HomeHeader";
import { apiImageUrl, apiOptions } from "../../../shared/API/Config/Config";
import Carrossel from "../../../components/Carrossel";
import useApi from "../../../shared/API/Hooks/useApi";
import Icelebrity, { Iresults } from "../../../shared/API/Model/celebrity"
import { useNavigate } from "react-router-dom";
import serie from "../../../shared/API/Model/Serie";
import axios from "axios";
import { useEffect, useState } from "react";

const Celebrity = () => {
  const headerOpt = apiOptions("GET", `https://api.themoviedb.org/3/tv/235484`);
 const headerSerie = useApi<serie|null>(headerOpt)
const navigate = useNavigate()

const AtorOpt = apiOptions("GET", `https://api.themoviedb.org/3/person/popular`)
  const [carrossel,setCarrossel] = useState<Iresults[]>()

 useEffect(() =>{
  axios
  .request(AtorOpt)
  .then(function (response) {
      const atoresExcluidos = ["Gary Oldman","Cooper Koch","Sydney Sweeney","Margaret Qualley","Jason Statham","Joey King","Scarlett Johansson","Jenna Ortega"];
setCarrossel(response.data?.results.filter((ator) => 
  atoresExcluidos.includes(ator.name)) 

);
  })
  .catch(function (error) {
    console.error(error);
  });
 },[])


 function redirectCelebrity(id: string, media_type:string) {
  if (media_type ==='movie') {
    navigate(`/home/movie/${id}`);
  }
  else if (media_type ==='tv') {
    navigate(`/home/serie/${id}`);
  }
  
}

  return (
    <div>
      <HomeHeader serie={headerSerie?.dados} />
     <div className="overflow-y-auto h-[900px]">
     {carrossel?.map((result)=>(
        <div className=" bg-neutral-600 pb-11" key={result?.id}>
        <div className="flex flex-col gap-2 ml-16 pt-2">
          <div className="flex gap-16">
            <div>
              <h4 className="h4-heading text-white pb-3">{result?.name}</h4>
              <img src={apiImageUrl(result?.profile_path)} className="w-[260px] h-[361px] rounded-lg object-cover"  alt="ator" />
            </div>
            <div>
              <h4 className="h4-heading text-white pb-3">Conhecido(a) por</h4>
              <Carrossel data={result?.known_for} redirectCollection={redirectCelebrity}/>
            </div>
          </div>
        </div>
      </div>
      ))}
     </div>
    </div>
  );
};

export default Celebrity;
