import React, { useState, useEffect } from 'react';
import data from "../../data";
import Card from "../Card"
import FilterDesktop from '../Filter/Desktop';

import s from './CardList.module.scss';

const CardList = () => {

    const [cards, setCards] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setCards(data.cards)
        setIsLoaded(true)
    }, []);

    return <>
        {!isLoaded && (<h4>Loading...</h4>)}
        {isLoaded && (<>
            <FilterDesktop />
            <div className={s.grid}>
                {cards.map((c) => <Card
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    title={c.title}
                    description={c.description}
                    featured={c.featured}
                    tags={c.tags}
                />
                )}
            </div>
        </>)
        }

    </>;
}

export default CardList;