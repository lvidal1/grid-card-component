import React, { useState, useEffect } from 'react';
import { MultiSelect } from "react-multi-select-component";
import s from "./Filter.module.scss"

import DS from "../../../Datasource";

const FilterMobile = () => {
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);

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
        setOptions(mapTags(DS.GET_TAGS))
    }, []);

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