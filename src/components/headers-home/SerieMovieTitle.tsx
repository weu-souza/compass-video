import { serieProps } from "../../shared/Types/Types";
const SerieMovieTitle = ({serie,children}:serieProps) => {
    
  return (
    <div className='flex px-20 gap-4 items-center'>
      <h1 className='text-white h1-heading'>{children}</h1> 
      <select name="" id="" className=' bg-opacity-black-10 border border-white rounded-full px-4  h-[40px]  text-white outline-none body-review'>
       { serie?.genres.map((genre) =>(
        <option key={genre.id} value="" className='bg-white border-none rounded-lg text-black'>{genre.name}</option>
       ))}
         
      </select>
    </div>
  )
//   
}

export default SerieMovieTitle
