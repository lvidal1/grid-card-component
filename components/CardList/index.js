import React, { useState, useEffect } from 'react';
import Card from "../Card"
import FilterDesktop from '../Filter/Desktop';
import FilterMobile from '../Filter/Mobile';

import useCard from '../../store/useCard';
import s from './CardList.module.scss';

const CardList = () => {

    const {
        isLoading,
        cardList,
    } = useCard();

    useEffect(() => {

    }, []);

    return <>
        {isLoading && (<h4>Loading...</h4>)}
        {!isLoading && (<>
            <FilterDesktop />
            <FilterMobile />
            <div className={s.grid}>
                {cardList.map((c) => <Card
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