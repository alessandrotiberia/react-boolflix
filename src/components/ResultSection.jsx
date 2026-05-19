import React from "react";
import Card from "./Card";

//componente farà da contenitore per le card

// Riceve due props, titolo della sezione e l'array dei dati

function ResultSection({ sectionTitle, items }) {

    // se array vuoto restituisco null
    if (items.length === 0) {
        return null;
    }

    return (
        <>
            <section className="results-container">
                {/* Stampiamo il titolo della sezione */}
                <h2>{sectionTitle}</h2>

                {/* 3. Il metodo map() scorre l'array "items" elemento per elemento */}
                <div className="cards-grid">
                    {items.map((singleItem) => (
                        <Card key={singleItem.id} movie={singleItem} />
                    ))}
                    {/*Per ogni elemento, generiamo un componente Card.*/}

                </div>
            </section>
        </>
    )

}
export default ResultSection;

//Il metodo .map() Prende un array 
// esegue una funzione per ogni elemento al suo interno e restituisce un nuovo array di elementi HTML/JSX