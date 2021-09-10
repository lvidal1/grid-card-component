import React, { useEffect, useContext } from 'react'
import Checkbox from '../../Checkbox'
import uuid from 'react-uuid'
import s from './Filter.module.scss'

import useTag from '../../../hooks/useTag'
import { FilterContext } from '../../../contexts/FilterContext'

const FilterDesktop = () => {
	const { tagList } = useTag()

	const { filterByTags, setFilterByTags } = useContext(FilterContext)

	const toggleHandler = (toggle, item) => {
		// add to list
		if (toggle) {
			setFilterByTags([...filterByTags, item])
		} else {
			// remove from list
			setFilterByTags(filterByTags.filter(tag => tag !== item))
		}
	}

	const MemoCheckbox = React.memo(Checkbox)

	return (
		<div className={s['filter']}>
			{tagList.map(tag => {
				const key = `chk-${uuid()}`
				return (
					<MemoCheckbox
						key={key}
						id={key}
						text={tag}
						checked={filterByTags.includes(tag.toLowerCase())}
						onToggle={toggleHandler}
					/>
				)
			})}
		</div>
	)
}

export default FilterDesktop
