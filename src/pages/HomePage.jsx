import React, { useContext } from 'react';
// 1. Importiamo il Context per accedere ai dati globali
import { MovieContext } from '../contexts/MovieContext';
// 2. Importiamo il componente per le sezioni dei risultati
import ResultSection from '../components/ResultSection';

function HomePage() {
  const { movies, series, isLoading, isSearching } = useContext(MovieContext);
  return (
    <div className="home-page-container">
            
            {/* 4. Rendering condizionale per la schermata di caricamento */}
            {isLoading && (
                <div className="loader-placeholder">
                    <p>Caricamento dei dati in corso...</p>
                </div>
            )}

            {/* 5. Mostriamo i risultati solo se il caricamento è terminato e l'utente ha avviato una ricerca */}
            {!isLoading && isSearching && (
                <>
                    {/* Sezione Film */}
                    <ResultSection sectionTitle="Movies" items={movies} />
                    
                    {/* Sezione Serie TV */}
                    <ResultSection sectionTitle="TV Series" items={series} />
                </>
            )}

            {/* 6. Messaggio di benvenuto se l'utente non ha ancora cercato nulla */}
            {!isSearching && !isLoading && (
                <div className="welcome-message">
                    <p>Benvenuto su Boolflix! Digita un titolo nella barra di ricerca in alto per iniziare.</p>
                </div>
            )}

        </div>
    
  )
}
export default HomePage;
