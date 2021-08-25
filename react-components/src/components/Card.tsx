/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/card.css';

const Card = (props: {
  image: string | undefined;
  name:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  nameEnglish:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  country:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  weight:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  growth:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
  age:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.image} alt="dog" className="card__image" />
        <button type="button" className="card__button">
          Больше информации
        </button>
      </div>
      <div className="card__info">
        <div className="card__info-name">{props.name}</div>
        <div className="card__info-name-english">
          <span>{props.nameEnglish}</span>
        </div>
        <div className="card__info-text">
          <span>Страна происхождения: </span>
          {props.country}
        </div>
        <div className="card__info-text">
          <span>Вес взрослой собаки: </span>
          {props.weight}
        </div>
        <div className="card__info-text">
          <span>Рост взрослой собаки: </span>
          {props.growth}
        </div>
        <div className="card__info-text">
          <span>Максимальный возраст: </span>
          {props.age}
        </div>
      </div>
    </div>
  );
};

export default Card;
