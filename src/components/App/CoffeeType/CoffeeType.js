import style from "./CoffeeType.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function CoffeeType({ title, description }) {
  const [isDescriptionActive, setStateIsDescriptionActive] = useState(false);

  // const setStateDescription = () => {
  //   // const newState = !isDescriptionActive;
  //   setStateIsDescriptionActive(!isDescriptionActive)
  // }

  return (
    // className="хочет классы в формате строка"
    <div className={style["coffee-type"]} onClick={() => setStateIsDescriptionActive(!isDescriptionActive)}>
      <FontAwesomeIcon icon={faMugSaucer} />
      <FontAwesomeIcon icon={faCircleQuestion} className={style["coffee-type__ico-question"]} />

      <h3 className={style["coffee-type__title"]}>{title}</h3>
      <div className={`${style["coffee-type__description"]} ${isDescriptionActive === true ? style["coffee-type__description--active"] : ""}`}>
        {description}
      </div>
    </div>
  );
}

// 1. происходит действие(клик)
// 2. изменение состояния компонента
// 3. перерисовка

export default CoffeeType;

/* 
fa-regular fa-circle-question coffee-type__ico-question
const arr = ['class1', 'class2']
arr.join(' ') -> 'class1 class2'

*/
