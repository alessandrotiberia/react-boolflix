// riceve info del film e stampa, funzione card
import React from "react";

function Card({ movie }) {

    return (
        <div className="card">
            <ul>
                {/* Estraiamo le proprietà dall'oggetto movie ricevuto dall'API */}
                <li><strong>Titolo:</strong> {movie.title}</li>
                <li><strong>Titolo Originale:</strong> {movie.original_title}</li>
                <li><strong>Lingua:</strong> {movie.original_language}</li>
                <li><strong>Voto:</strong> {movie.vote_average}</li>
            </ul>
        </div>
    )
}
export default Card;