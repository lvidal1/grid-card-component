import React, { useEffect } from 'react';
import Checkbox from '../../Checkbox';
import { uuid } from "uuidv4";
import s from "./Filter.module.scss"

import useTag from "../../../store/hooks/useTag";

const FilterDesktop = () => {

    const { tagList } = useTag();

    useEffect(() => {
      
    }, []);

    return <div className={s["filter"]}>
        {tagList.map((tag) => {
            const key = `chk-${uuid()}`;
            return <Checkbox key={key} id={key} text={tag} />
        })}
    </div>
        ;
}

export default FilterDesktop;