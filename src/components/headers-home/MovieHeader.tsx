import ButtonArea from "./ButtonArea"
interface genre{
id:number,
name:string
}
interface Movie{
  id:number;
    backdrop_path:string
    genres:genre[]
    original_title:string
    overview:string
    release_date:string
    runtime:number

}
type movieTipe={
    data:Movie | undefined
    movieCategorie:boolean

}
const MovieHeader = ({data,movieCategorie}:movieTipe) => {
  return (
    <div>
       <div className=" flex flex-col py-40 px-4 pb-11 image-bg-container">
      <div className="flex flex-col ml-20 gap-5 max-w-[719px]">
        <h1 className="h1-heading text-white">{data?.original_title}</h1>
        <span className="text-white body-small items-center flex gap-2">
          {data?.release_date.slice(0,4)}
          <span className=" flex content-center w-0 bg-black">
            <i className="fa-solid fa-circle text-[4px] self-center"></i>{" "}
          </span>
          {data?.runtime} Minutes
        </span>
        <p className="text-white caption flex flex-row">{data?.genres.map((genre) =>(<span key={genre.id}> <span>{genre.name}</span>, </span>))}</p>
        {movieCategorie && <ButtonArea WatchmediaType="movie" watchMediaId={data?.id} data={data?.original_title} icon={false} seccondButton="TRAILER"/>}
        
        <p className="body-large text-white">{data?.overview}</p>
        {!movieCategorie && <ButtonArea WatchmediaType="movie" watchMediaId={data?.id} data={data?.original_title} seccondButton="MAIS INFORMAÇÕES" icon={true}/>}
      </div>
    </div>
    </div>
  )
}

export default MovieHeader
