import React, { useEffect, useState } from 'react';
import Checkbox from '../../Checkbox';
import { uuid } from "uuidv4";
import s from "./Filter.module.scss"

import data from "../../../data"

const FilterDesktop = () => {

    const [tags, setTags] = useState([]);

    const getTags = (cards) => {
        // Get all tags from cards
        const filtered = cards.map(card => card.tags);
        // Flat multidimentional array
        const flatten = [].concat(...filtered);
        // Delete dupes and sort alphabetically
        return [...new Set(flatten)].sort((a, b) => (a > b) * 2 - 1)
    }

    useEffect(() => {
        setTags(getTags(data.cards))
    }, []);

    return <div className={s["filter"]}>
        {tags.map((tag) => {
            const key = `chk-${uuid()}`;
            return <Checkbox key={key} id={key} text={tag} />
        })}
    </div>
        ;
}

export default FilterDesktop;