export default interface serie {
  id: number;
  backdrop_path: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  genres: Genre[];
  number_of_seasons: number;
  release_date:string
  episodes:seasonEpsode[]
}

interface seasonEpsode{
  epsode_number:number;
  name:string;
  overview:string;
  still_path:string;
  runtime:number
}

 interface Genre {
  id: number;
  name: string;
}
