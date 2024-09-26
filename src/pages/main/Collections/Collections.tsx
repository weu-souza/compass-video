import Carrossel from "../../../components/Carrossel";
import { useNavigate, useParams } from "react-router-dom";
import HeadersCollections from "../../../components/headers-home/HeadersCollections";
import { apiOptions } from "../../../shared/API/Config/Config";
import useApi from "../../../shared/API/Hooks/useApi";
interface carrossel {
  id: string;
  poster_path: string;
}

const Collections = () => {
  const navigate = useNavigate()
  const SerieID = useParams();
  const options =  apiOptions("GET",`https://api.themoviedb.org/3/collection/${SerieID.id}`)
const api = useApi(options)

  const handleCollection = (id: number) => {
    navigate(`/home/movie/${id}`);
  };
  return (
    <div>
      
      <HeadersCollections data={api?.dados}/>
      
      <div className="bg-neutral-600 pb-11 pt-11">
      <div className="ml-16 pt-2 pb-11">
        <div className="flex flex-col gap-2">
          <h4 className="h4-heading text-white">Coleções</h4>
          <div>
            <Carrossel
              data={api.dados?.parts}
              redirectCollection={handleCollection}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Collections;
