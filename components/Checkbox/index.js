import { useState } from 'react';
import s from "./Checkbox.module.scss"

const toggle = (value) => {
    return !value;
}

const Checkbox = ({id ,text}) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className={s.checkbox}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(toggle)}
            />
            <label htmlFor={id} aria-labelledby={id}>{text}</label>
        </div>
    )
}

export default Checkbox;