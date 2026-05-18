import { useState, useContext } from 'react';
// Importiamo il Context per potervi accedere
import { MovieContext } from '../contexts/MovieContext';

function SearchBar() {
    // 1. Definiamo lo stato locale per tenere traccia di quello che l'utente digita
    const [inputValue, setInputValue] = useState('');

    // 2. Estraiamo la funzione search dal nostro Context globale
    const { search } = useContext(MovieContext);

    // 3. Funzione per aggiornare lo stato locale ad ogni tasto premuto
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // 4. Funzione che gestisce l'invio del form
    const handleFormSubmit = (event) => {
        // Blocchiamo il ricaricamento della pagina
        event.preventDefault();
        
        // Eseguiamo la funzione globale passando il testo digitato
        search(inputValue);

        // Opzionale: svuotiamo la barra di ricerca dopo aver inviato la richiesta
        setInputValue('');
    };

    return (
        // Utilizziamo il form con l'evento onSubmit al posto del click sul bottone
        <form className="search-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Cerca un film o una serie TV..."
                value={inputValue}
                onChange={handleInputChange}
                className="search-input"
            />
            <button type="submit" className="search-button">
                Cerca
            </button>
        </form>
    );
}

export default SearchBar;