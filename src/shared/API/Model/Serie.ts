export default interface serie {
  id: number;
  backdrop_path: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  genres: Genre[];
  number_of_seasons: number;
  series:season[] 
  seasons:{
    id:number,
    image:string
  }
}
 interface Genre {
  id: number;
  name: string;
}

interface season {
  air_date:string;
  episode_count:number;
  id:number;
  name:string;
  overview:string;
  poster_path:string
  season_number:number
  vote_average:number

}

