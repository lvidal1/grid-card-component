import React, { useEffect, useState } from 'react';
import Checkbox from '../../Checkbox';
import { uuid } from "uuidv4";
import s from "./Filter.module.scss"

import DS from "../../../Datasource";

const FilterDesktop = () => {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(DS.GET_TAGS)
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