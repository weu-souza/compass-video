import { useEffect, useState } from "react"
import Carrossel from "../../../components/Carrossel"
import { apiImageUrl, apiOptions } from "../../../shared/API/Config/Config"
import axios from "axios"
import serie from "../../../shared/API/Model/Serie"
import { useNavigate, useParams } from "react-router-dom"
import semImg from "../../../assets/img/sem-img.jpg"
import HomeHeader from "../../../components/headers-home/HomeHeader"
import useApi from "../../../shared/API/Hooks/useApi"

interface carrossel {
  id: string;
  poster_path: string;
}
interface carrosselI {
  results:carrossel[]
}

const SerieFilho = () => {
  const params = useParams()
  const navigate = useNavigate()
  const options = apiOptions("GET",`https://api.themoviedb.org/3/tv/${params.id}`)

  const similar = apiOptions(
    "GET",
    `https://api.themoviedb.org/3/tv/${params.id}/similar`
  );

  const carrossel = useApi<carrosselI>(similar);
  const data = useApi<serie>(options);

  const handleRedirect = (season_number:number) =>{
    navigate(`/home/serie/${params.id}/${season_number}`)
  }

  const handleRedirectCarrossel = (id:string) =>{
    navigate(`/home/serie/${id}`)

  }

  return (
    <div>
      <HomeHeader serie={data.dados} />
      <div className="bg-neutral-600 pb-11">  
    <div className="pl-20 pb-11">
      
      <h3 className="h4-heading text-white pb-4">Temporadas</h3>
      
      <div  className="pb-10" >
      <Carrossel data={data.dados?.seasons} redirectCollection={handleRedirect}/>
      </div>

      <div>
        <h3 className="h4-heading text-white pb-4">Similares</h3>
        <Carrossel data={carrossel.dados?.results} redirectCollection={handleRedirectCarrossel}/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SerieFilho
