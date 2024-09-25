import HomeHeader from "../../../components/headers-home/HomeHeader";
import { apiOptions } from "../../../shared/API/Config/Config";
import useApi from "../../../shared/API/Hooks/useApi";
import serie from "../../../shared/API/Model/Serie";
import Carrossel from "../../../components/Carrossel";
import { useNavigate } from "react-router-dom";

interface carrossel {
  id: string;
  poster_path: string;
}
interface carrosselI {
  results:carrossel[]
}
const Serie = () => {
  const navigate = useNavigate()
const serieHeader = apiOptions(
    "GET",
    "https://api.themoviedb.org/3/tv/94954"
  );

  const  dadosSerie = useApi<serie>(serieHeader);
  const options = apiOptions(
    "GET",
    'https://api.themoviedb.org/3/tv/top_rated'
  );
  const  carrossel = useApi<carrosselI>(options);

 const handleSeries = (id: string) => {
  navigate(`/home/serie/${id}`);
};


  return (
    <div>
      <HomeHeader  serie={dadosSerie.dados} />
      <div className=" bg-neutral-600 pb-11">
        <div className="ml-16 pt-2">
          <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Lançamentos</h4>
            <div><Carrossel data={carrossel.dados?.results} redirectCollection={handleSeries}/></div>
            <h4 className="h4-heading text-white">Populares</h4>
            <div><Carrossel data={carrossel.dados?.results} redirectCollection={handleSeries}/></div>
            <h4 className="h4-heading text-white">Estão no ar</h4>
            <div><Carrossel data={carrossel.dados?.results} redirectCollection={handleSeries}/></div>
            <h4 className="h4-heading text-white">Mais bem avaliadas</h4>
            <div><Carrossel data={carrossel.dados?.results} redirectCollection={handleSeries}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serie;
