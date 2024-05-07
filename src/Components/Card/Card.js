import React from 'react';
import classes from './Card.module.css';
import deleteIcon from '../../assets/DeleteIcon.svg';

const Card = () => {
  return (
    <div>
      <form action="">
        <div className={classes.main}>
          <span>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" />
          </span>
          <span>
            <label htmlFor="value">Value:</label>
            <input id="value" type="number" />
          </span>
          <button>
            <img src={deleteIcon} alt="Delete Icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;
