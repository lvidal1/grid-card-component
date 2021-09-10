import React, { useContext } from "react"
import Card from "../Card"
import FilterDesktop from "../Filter/Desktop"
import FilterMobile from "../Filter/Mobile"

import useCard from "../../hooks/useCard"
import s from "./CardList.module.scss"

import { FilterContext } from "../../contexts/FilterContext"

const CardList = () => {
	const { isLoading, cardList } = useCard()

	const { filterByTags } = useContext(FilterContext)

	const cardHasTags = (card, tags) => {
		return tags.length > 0
			? card.tags.filter(value => tags.includes(value.toLowerCase())).length > 0
			: true
	}

	return (
		<div className="bg-white shadow-sm p-3 mb-5 rounded" id="cards">
			{isLoading && <h4>Loading...</h4>}
			{!isLoading && (
				<>
					<div className={`p-2`}>
						<FilterDesktop />
						<FilterMobile />
					</div>
					<hr className={`mt-3`} />
					<div className={`row`}>
						{cardList.map(card =>
							cardHasTags(card, filterByTags) ? (
								<div
									className={`col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center`}
								>
									<Card
										key={card.id}
										id={card.id}
										image={card.image}
										title={card.title}
										description={card.description}
										featured={card.featured}
										tags={card.tags}
									/>
								</div>
							) : (
								""
							)
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default CardList
