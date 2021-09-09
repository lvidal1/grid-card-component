import React, { useState, useEffect} from 'react';
import data from "../../data";
import Card from "../Card"

const CardList = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(data.cards)
    }, []);
    
    return <>{cards.map((c)=> <Card 
        key={c.id}
        id={c.id} 
        image={c.image} 
        title={c.title} 
        description={c.description} 
        featured={c.featured} 
        tags={c.tags} 
        /> 
        
    )}</>;
}
 
export default CardList;