import React, { useEffect, useState } from 'react';
import Carrossel from '../components/Carrossel';
import axios from 'axios';

interface Carrossel {
  id: string;
  poster_path: string;
}

const User_Account = () => {
  const [filmesFavoritos, setFilmesFavoritos] = useState<Carrossel[]>([]);
  const [seriesFavoritas, setSeriesFavoritas] = useState<Carrossel[]>([]);
  const [filmesVerDepois, setFilmesVerDepois] = useState<Carrossel[]>([]);
  const [seriesVerDepois, setSeriesVerDepois] = useState<Carrossel[]>([]);
  const sessionId = localStorage.getItem('sessionId');

  const fetchList = async (url: string, stateUpdater: React.Dispatch<React.SetStateAction<Carrossel[]>>) => {
    try {
      const response = await axios.get(url, {
        params: {
          language: 'en-US',
          page: '1',
          session_id: sessionId,
          sort_by: 'created_at.asc'
        },
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${ import.meta.env.VITE_KEY}`
        }
      });
      stateUpdater(response.data.results);
    } catch (error) {
      console.error(`Erro ao buscar ${url}:`, error);
    }
  };
  useEffect(() => {
    if (sessionId) {
      fetchList(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_account_id}/favorite/movies`, setFilmesFavoritos);
      fetchList(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_account_id}/favorite/tv`, setSeriesFavoritas);
      fetchList(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_account_id}/watchlist/movies`, setFilmesVerDepois);
      fetchList(`https://api.themoviedb.org/3/account/${import.meta.env.VITE_account_id}/watchlist/tv`, setSeriesVerDepois);
    } else {
      console.error('sessionId não encontrado no localStorage');
    }
  }, [sessionId]);

  const isEmpty =
    filmesFavoritos.length === 0 &&
    seriesFavoritas.length === 0 &&
    filmesVerDepois.length === 0 &&
    seriesVerDepois.length === 0;

  return (
    <div>

    <div className="w-full flex flex-col justify-center bg-neutral-600">
      
      <div>
        <div className="text-white ml-4 md:ml-24 w-96">
          <h2 className="h2-heading">Minhas listas</h2>
          <p className="body-small opacity-60">Listas criadas por você de acordo com seus gostos</p>
        </div>
        {isEmpty ? (
          <div>
            <p className="text-white ml-4 mt-4 md:ml-24 body-review">
              Nenhum filme ou série foi adicionado às suas listas. Adicione algo para começar!
            </p>
          </div>
        ) : (
          <>
            {filmesFavoritos.length > 0 && (
              <div className="ml-4 pt-2 pb-11 mt-4 md:ml-24">
                <div className="flex flex-col gap-2">
                  <h4 className="h4-heading text-white">Filmes favoritos</h4>
                  <Carrossel data={filmesFavoritos} />
                </div>
              </div>
            )}

            {seriesFavoritas.length > 0 && (
              <div className="ml-4 pt-2 pb-11 md:ml-24">
                <div className="flex flex-col gap-2">
                  <h4 className="h4-heading text-white">Séries favoritas</h4>
                  <Carrossel data={seriesFavoritas} />
                </div>
              </div>
            )}

            {filmesVerDepois.length > 0 && (
              <div className="ml-4 pt-2 pb-11 md:ml-24">
                <div className="flex flex-col gap-2">
                  <h4 className="h4-heading text-white">Filmes para ver mais tarde</h4>
                  <Carrossel data={filmesVerDepois} />
                </div>
              </div>
            )}

            {seriesVerDepois.length > 0 && (
              <div className="ml-4 pt-2 pb-11 md:ml-24">
                <div className="flex flex-col gap-2">
                  <h4 className="h4-heading text-white">Séries para ver mais tarde</h4>
                  <Carrossel data={seriesVerDepois} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default User_Account;
