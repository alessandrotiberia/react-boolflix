import React from "react";

function Card({ movie }) {
    // Unifichiamo i nomi delle proprieta tra film e serie TV per evitare campi vuoti
    const title = movie.title || movie.name;
    const originalTitle = movie.original_title || movie.original_name;

    // Dizionario di mappatura per le bandiere
    const languageToCountryMap = {
        en: 'gb', 
        it: 'it', 
        fr: 'fr', 
        es: 'es', 
        de: 'de', 
        ja: 'jp', 
        zh: 'cn', 
        ko: 'kr'  
    };
    const countryCode = languageToCountryMap[movie.original_language];

    // Gestione immagine di copertina dimensione 342
    const baseImageUrl = 'https://image.tmdb.org/t/p/w342';
    const posterImageUrl = movie.poster_path 
        ? `${baseImageUrl}${movie.poster_path}` 
        : 'https://placehold.co/342x513?text=Copertina+Non+Disponibile';

    // Voto recensioni base 10
    const decimalVote = movie.vote_average;

    // Voto recensioni base 5 arrotondato per eccesso
    const convertedVote = Math.ceil(decimalVote / 2);

    const renderStars = () => {
        const starsArray = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= convertedVote) {
                starsArray.push(<i key={i} className="fa-solid fa-star"></i>);
            } else {
                starsArray.push(<i key={i} className="fa-regular fa-star"></i>);
            }
        }
        
        return starsArray;
    };

    return (
        <div className="movie-card">

            {/* Immagine di copertina del film */}
            <img src={posterImageUrl} alt={title} className="card-poster" />
            
            {/* Blocco delle informazioni che appare in hover */}
            <div className="card-info">
                <ul>
                    {/* Richiamiamo le variabili normalizzate per supportare anche le serie TV */}
                    <li><strong>Titolo:</strong> {title}</li>
                    <li><strong>Titolo Originale:</strong> {originalTitle}</li>
                    <li>
                        <strong>Lingua:</strong>{' '}
                        {countryCode ? (
                            <img
                                src={`https://flagcdn.com/16x12/${countryCode}.png`}
                                alt={movie.original_language}
                                className="flag-icon"
                            />
                        ) : (
                            <span className="text-language">{movie.original_language}</span>
                        )}
                    </li>
                    {/* Richiamo corretto della funzione per le stelle */}
                    <li><strong>Voto:</strong> {renderStars()}</li>
                    
                    {/* Inserimento della trama come richiesto dalla Milestone 4 */}
                    <li className="overview">
                        <strong>Overview:</strong> {movie.overview || 'Trama non disponibile.'}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card;