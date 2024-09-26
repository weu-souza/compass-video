
import HomeHeader from "../../../components/headers-home/HomeHeader";
import { apiImageUrl, apiOptions } from "../../../shared/API/Config/Config";
import Carrossel from "../../../components/Carrossel";
import useApi from "../../../shared/API/Hooks/useApi";
import serie from "../../../Serie";
import Icelebrity from "../../../shared/API/Model/celebrity"
import { useNavigate } from "react-router-dom";
const Celebrity = () => {
  const headerOpt = apiOptions("GET", `https://api.themoviedb.org/3/tv/235484`);
 const headerSerie = useApi<serie|null>(headerOpt)
const navigate = useNavigate()

const AtorOpt = apiOptions("GET", `https://api.themoviedb.org/3/person/popular`)
  const carrossel = useApi<Icelebrity>(AtorOpt)

  console.log()

 function redirectCelebrity(id:string){
  navigate(`/home/movie/${id}`);
  }

  return (
    <div>
      <HomeHeader serie={headerSerie?.dados} />
      {carrossel.dados?.results.slice(0,8).map((result)=>(
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
  );
};

export default Celebrity;
