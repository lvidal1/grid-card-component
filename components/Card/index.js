import React from 'react';
import Image from "next/image";
import TagList from "../TagList";
import Link from 'next/link';
import s from './Card.module.scss';
import Ribbon from '../Ribbon';


const Card = ({ id, title, image ,description, featured, tags }) => {

    const isFeatured = (featured) => featured == "1";

    return <div className={s.scene}>
        <div className={s.card}>
            <div className={`${s["card__face"]} ${s["card__face--front"]}`}>
                <div className={s["card__image"]}>
                    <Image src={image}
                        alt={`Image ${id}`}
                        layout='fill'
                    />
                </div>
                <div className={s["card__body"]}>
                    <h2 className={s["card__title"]}>{title}</h2>
                    <p className={s["card__description"]}>
                    {description}
                    </p>
                </div>
                {isFeatured(featured) &&  <Ribbon />}
            </div>
            <div className={`${s["card__face"]} ${s["card__face--back"]}`}>
                <div className={s["card__body"]}>
                    <h2 className={s["card__title"]}>{id}</h2>
                    <TagList tags={tags} />
                    <Link href="/a">
                        <a className={s["card__readmore"]}>Read more...</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>;
}

export default Card;