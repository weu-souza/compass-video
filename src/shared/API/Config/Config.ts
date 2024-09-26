
export const apiOptions = (method:string, url:string) =>{
  const key = (import.meta.env.VITE_KEY)
    const options = {
        method: method,
        url: url,
        params: { language: "en-US", page: "1",include_adult: false},
        headers: {
          accept: "application/json",
          Authorization:
            `Bearer ${key}`,
        },
      };

      return options;
}


export const apiImageUrl = (imageUrl:string) =>{
const image = `https://image.tmdb.org/t/p/original${imageUrl}`
return image
}