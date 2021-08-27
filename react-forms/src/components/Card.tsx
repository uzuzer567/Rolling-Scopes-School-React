import React, { FC } from 'react';
import '../styles/card.css';
import { ItemProps } from '../type';

const Card: FC<ItemProps> = ({ item }) => {
  return (
    <div className="card">
      <div className="card__text">
        <span>Name:</span>
        {item.userName}
      </div>
      <div className="card__text">
        <span>Date of Birth:</span>
        {item.birthDate}
      </div>
      <div className="card__text">
        <span>Gender:</span>
        {item.genderCheck}
      </div>
      <div className="card__text">
        <span>Goal:</span>
        {item.userGoal}
      </div>
      <div className="card__text">
        <span>&#10004; agrees to the processing of data &#10004;</span>
      </div>
    </div>
  );
};

export default Card;
