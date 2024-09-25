import axios, { AxiosResponse } from 'axios';

const addFavorite = (sessionId: string, mediaId: number, mediaType: 'tv' | 'movie'): Promise<AxiosResponse<any>> => {
  const options = {
    method: 'POST',
    url: `https://api.themoviedb.org/3/account/21349506/favorite`,
    params: { session_id: sessionId },
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTI2OTM5My4xMTgzNTIsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B68cDtxz79f0-7mmzUdbWn9pdXzNw_9T7JvTHVXrF-I'
    },
    data: { media_id: mediaId, media_type: mediaType, favorite: true }
  };

  return axios.request(options);
};

export default addFavorite;
