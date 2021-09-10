import React, { useState, useEffect, useContext } from 'react';
import { MultiSelect } from "react-multi-select-component";
import s from "./Filter.module.scss"

import useTag from "../../../store/hooks/useTag";
import useCard from "../../../store/hooks/useCard";
import { FilterContext } from "../../../store/contexts/FilterContext";

const FilterMobile = () => {
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);

    const { tagList } = useTag();

    const { filterByTags, setFilterByTags } = useContext(FilterContext);

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
        setSelected(mapTags(filterByTags));
    }, [filterByTags]);

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
                onChange={(selected)=>{
                    const activeList = selected.map(s => s.value);
                    setSelected(selected)
                    setFilterByTags(activeList)
                }}
                labelledBy="Select"
                className={s["filter__tags"]}
            />
        </div>
    );
};

export default FilterMobile;