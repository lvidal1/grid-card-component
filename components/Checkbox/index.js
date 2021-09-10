import { useState , useEffect } from "react";
import s from "./Checkbox.module.scss";



const Checkbox = ({ id, text, onToggle, checked }) => {
  //const [checked, setChecked] = useState(false);

  const onCheckboxChange = (checked, text) => {
    //setChecked(checked);
    console.log("1",checked)
    onToggle(checked, text);
    console.log("2",checked)
  }

  return (
    <div className={s.checkbox}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
            onCheckboxChange(e.target.checked ,text);
        }}
      />
      <label htmlFor={id} aria-labelledby={id}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
