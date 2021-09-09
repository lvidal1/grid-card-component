import React, { useState, useEffect } from 'react';
import { MultiSelect } from "react-multi-select-component";
import s from "./Filter.module.scss"

import useTag from "../../../store/hooks/useTag";

const FilterMobile = () => {
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);

    const { tagList } = useTag();

    const mapTags = (tags) => 
        tags.map((tag) =>
        (
            {
                label: tag.toUpperCase(),
                value: tag
            }
        )
        )
    ;

    useEffect(() => {
        setOptions(mapTags(tagList))
    }, [tagList]);

    return (
        <div className={s["filter"]}>
            <h4>Filter by Tag:</h4>
            {/* <pre>{JSON.stringify(selected)}</pre> */}
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                className={s["filter__tags"]}
            />
        </div>
    );
};

export default FilterMobile;