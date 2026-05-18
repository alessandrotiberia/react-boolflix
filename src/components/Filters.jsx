import React from 'react';
// 1. Importiamo la barra di ricerca appena creata
import SearchBar from './SearchBar';

function Filters() {
    return (
        <div className="filters-container">
            {/* 2. Inseriamo il mattoncino della barra di ricerca */}
            <SearchBar />
            
            {/* Qui in futuro aggiungerai il FilterSelect per i generi, come da schema */}
        </div>
    );
}

export default Filters;