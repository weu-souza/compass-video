import { useState,ComponentProps } from "react"
import addFavorite from "../../shared/AddFav"
import addLater from "../../shared/AddLater"

type elementos = ComponentProps<'button'> &{
classChildren:string
className:string
}

const ButtonClicked = ( {classChildren,className}: elementos ) => {
  

  const[active,setActive] = useState(false)

  const handleActive = async () => {
    setActive(!active);
    const url = window.location.href;
    const regex = /\/(\d+)$/;
    const match = url.match(regex);
    if (!match) {
      console.log('Números finais não encontrados na URL.');
      return;
    }
    const SerieID = match[1];
    const sessionId = localStorage.getItem('sessionId');
    let mediaType: 'tv' | 'movie' = 'movie';

    if (url.includes('/serie/')) {
      mediaType = 'tv';
    }
  
    if (!sessionId) {
      console.error('sessionId não encontrado no localStorage');
      return;
    }
  
    try {
      if (mediaType === 'tv') {
        const response = await addLater(sessionId, SerieID, mediaType);
         console.log(response.data);
         console.log(mediaType);
      } else {
        const response = await addFavorite(sessionId, SerieID, mediaType);
         console.log(response.data);
         console.log(mediaType);
      }
    } catch (error) {
      console.error('Erro ao adicionar:', error.response?.data || error.message);
    }

    try {
      if (mediaType === 'movie') {
        const response = await addLater(sessionId, SerieID, mediaType);
         console.log(response.data);
         console.log(mediaType);
      } else {
        const response = await addFavorite(sessionId, SerieID, mediaType);
         console.log(response.data);
         console.log(mediaType);
      }
    } catch (error) {
      console.error('Erro ao adicionar:', error.response?.data || error.message);
    }
  };
  

  return (
    <button className={active?`hover:bg-opacity-black-60 ${className}`:`hover:bg-white ${className}` } onClick={handleActive}>
      <i onClick={handleActive} className={active?"fa-solid fa-check fa-lg text-secondary":classChildren}></i>
    </button>
  )
}

export default ButtonClicked
