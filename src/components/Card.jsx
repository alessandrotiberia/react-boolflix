// riceve info del film e stampa, funzione card
import React from "react";

function Card({ movie }) {

    const title = movie.title || movie.name;
    const originalTitle = movie.original_title || movie.original_name;

    // 2. Dizionario di mappatura: colleghiamo la lingua ISO (TMDb) al codice nazione (FlagCDN)
    const languageToCountryMap = {
        en: 'gb', // Inglese -> Gran Bretagna
        it: 'it', // Italiano -> Italia
        fr: 'fr', // Francese -> Francia
        es: 'es', // Spagnolo -> Spagna
        de: 'de', // Tedesco -> Germania
        ja: 'jp', // Giapponese -> Giappone
        zh: 'cn', // Cinese -> Cina
        ko: 'kr'  // Coreano -> Corea del Sud
    };
    const countryCode = languageToCountryMap[movie.original_language];

    //gestione img dimesione 342
    const baseImageUrl = 'https://image.tmdb.org/t/p/w342';

    const posterImageUrl = movie.poster_path 
        ? `${baseImageUrl}${movie.poster_path}` 
        : 'https://placehold.co/342x513?text=Copertina+Non+Disponibile';

    //voto recensioni 5 stelle 
    const decimalVote = movie.vote_average;

    //arrotondato eccesso
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
            
            {/* Blocco delle informazioni */}
            <div className="card-info"></div>
            <ul>
                {/* Estraiamo le proprietà dall'oggetto movie ricevuto dall'API */}
                <li><strong>Titolo:</strong> {movie.title}</li>
                <li><strong>Titolo Originale:</strong> {movie.original_title}</li>
                <li>
                    <strong>Lingua:</strong>{' '}
                    {/* 4. Operatore ternario per gestire il caso in cui la bandiera non sia presente */}
                    {countryCode ? (
                        <img
                            src={`https://flagcdn.com/16x12/${countryCode}.png`}
                            alt={movie.original_language}
                            className="flag-icon"
                        />
                    ) : (
                        // Fallback: se la lingua non è mappata nel dizionario, mostriamo il testo grezzo
                        <span className="text-language">{movie.original_language}</span>
                    )}
                </li>
                <li><strong>Voto:</strong> {movie.vote_average}</li>
            </ul>
        </div>
    )
}
export default Card;