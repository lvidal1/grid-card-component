import React from "react"
import Image from "next/image"

import TagList from "../TagList"
import Ribbon from "../Ribbon"

import s from "./Card.module.scss"
import { createShimmerImage } from "../../utils"

const Card = ({
	id,
	title,
	image,
	description,
	featured,
	tags,
	card,
	onReadMore
}) => {
	const isFeatured = featured => featured == "1"

	return (
		<div className={s.scene}>
			<div className={s.card}>
				<div className={`${s["card__face"]} ${s["card__face--front"]}`}>
					<div className={s["card__image"]}>
						<Image
							src={image}
							alt={`Image ${id}`}
							layout="fill"
							placeholder="blur"
							blurDataURL={createShimmerImage(400, 300)}
						/>
					</div>
					<div className={s["card__body"]}>
						<h2 className={s["card__title"]}>{title}</h2>
						<p className={s["card__description"]}>{description}</p>
					</div>
					{isFeatured(featured) && <Ribbon />}
				</div>
				<div className={`${s["card__face"]} ${s["card__face--back"]}`}>
					<div className={s["card__body"]}>
						<h2 className={s["card__title"]}>{id}</h2>
						<TagList tags={tags} />

						<a className={s["card__readmore"]} onClick={() => onReadMore(card)}>
							Read more...
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
