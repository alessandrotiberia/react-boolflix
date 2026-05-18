/*
Questo file x ffettuare le chiamate di rete sia per i film che per le serie TV.

 */
import { createContext, useState } from "react";

// 1. Creiamo il canale del Context. 
const MovieContext = createContext();

function MovieProvider({ children }) {

    // Stati definiti nella legenda del diagramma del docente
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState('');

    // 3. Funzione di ricerca centrale
    const search = async (query) => {
        // Se l'utente svuota la barra di ricerca, azzeriamo i risultati e lo stato di ricerca
        if (query.trim() === '') {
            setMovies([]);
            setSeries([]);
            setIsSearching(false);
            return;

    }

    const apikey = 'd748cf03e21867e26d4be63b5bb335f4';
    //Costruiamo i due endpoint separati per film e serie TV utilizzando i template literal
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it-IT`;
    const seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&language=it-IT`;

    setIsLoading(true);
    setIsSearching(true);


try {
      // Eseguiamo le due fetch in parallelo per ottimizzare i tempi di attesa
      const [movieResponse, seriesResponse] = await Promise.all([
        fetch(movieUrl),
        fetch(seriesUrl)
      ]);

      // Convertiamo simultaneamente i dati in json
      const movieData = await movieResponse.json();
      const seriesData = await seriesResponse.json();

      // Salviamo i vettori di risultati nei rispettivi stati globali
      setMovies(movieData.results || []);
      setSeries(seriesData.results || []);

    } catch (error) {
      console.error("Errore durante il recupero dei dati dall'API:", error);
    } finally {
      // Spegniamo l'indicatore di caricamento sia in caso di successo che di fallimento
      setIsLoading(false);
    }
  };

  // 4. Raggruppiamo tutti i valori e le funzioni in un unico oggetto di configurazione
  const contextValues = {
    movies,
    series,
    search,
    isLoading,
    isSearching,
    selectedGenre,
    setSelectedGenre
  };

  return (
    <MovieContext.Provider value={contextValues}>
      {children}
    </MovieContext.Provider>
  );

}

export { MovieContext, MovieProvider };
