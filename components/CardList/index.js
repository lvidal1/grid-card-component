import React, { useContext } from "react";
import Card from "../Card";
import FilterDesktop from "../Filter/Desktop";
import FilterMobile from "../Filter/Mobile";

import useCard from "../../store/hooks/useCard";
import s from "./CardList.module.scss";

import { FilterContext } from "../../store/contexts/FilterContext";

const CardList = () => {
  const { isLoading, cardList } = useCard();

  const { filterByTags } = useContext(FilterContext);

  const cardHasTags = (card, tags) => {
    return tags.length > 0
      ? card.tags.filter((value) => tags.includes(value.toLowerCase())).length >
          0
      : true;
  };

  return (
    <>
      {isLoading && <h4>Loading...</h4>}
      {!isLoading && (
        <>
          <FilterDesktop />
          <FilterMobile />
          {<pre>{JSON.stringify(filterByTags)}</pre>}
          <div className={s.grid}>
            {cardList.map((card) =>
              cardHasTags(card, filterByTags) ? (
                <Card
                  key={card.id}
                  id={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  featured={card.featured}
                  tags={card.tags}
                />
              ) : (
                ""
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CardList;
