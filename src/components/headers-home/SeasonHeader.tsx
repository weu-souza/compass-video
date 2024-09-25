
interface seasonEpsode{
  epsode_number:number;
  name:string;
  overview:string;
  still_path:string;
  runtime:number
}

interface season {
  name:string
  overview:string;
  air_date:string;
  vote_average:number;
  epsodes:seasonEpsode[]
}
type seasonHeader = {
  data:season
}
const SeasonHeader = ({data}:seasonHeader) => {
  return (
    <div>
       <div className=" flex flex-col py-40 px-4 pb-11 image-bg-container">
      <div className="flex flex-col ml-20 gap-5 max-w-[719px]">
        <h1 className="h1-heading text-white">{data?.name}</h1>
        <p className="text-white body-small flex items-center gap-2">
          {data?.air_date.slice(0,4)}
          <span className=" flex content-center w-0 bg-black ">
            <i className="fa-solid fa-circle text-[4px] self-center"></i>{" "}
          </span>
         {data?.vote_average} <i className="fa-solid fa-thumbs-up" style={{color:"yellow"}}></i>
        </p>
        <div className="flex flex-wrap gap-6  grid-cols-2">
          
          <button  className="  col-span-2 button-text rounded-sm px-6 py-2 bg-white hover:bg-opacity-40 gap-3 flex items-center text-center">
            <i className="fa-solid fa-play"></i>
            {"VER AGORA "}
          </button>

          <button className="button-text col-span-2    border  border-white rounded-sm px-6 py-2 text-white flex items-center gap-3 hover:bg-opacity-white-10 bg-opacity-black-10 ">
            {"TRAILER"}
          </button>
            </div>
        
        <p className="body-large text-white">{data?.overview}  </p>
      </div>
    </div>
    </div>
  )
}

export default SeasonHeader
