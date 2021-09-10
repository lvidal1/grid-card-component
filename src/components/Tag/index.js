import React from 'react'
import s from './Tag.module.scss'

const Tag = ({ name }) => {
	return <li className={s.tag}>{name}</li>
}

export default Tag
