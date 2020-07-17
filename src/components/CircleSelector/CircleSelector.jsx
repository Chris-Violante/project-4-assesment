import React from 'react'
import styles from '../CircleSelector/CircleSelector.css'

const CircleSelector = (props) => (
    <div className='CircleSelector'>
      {props.circles.map((key) => 
      <button
        className={props.selected === key ? 'selected' : ''}
        onClick={() => props.handleSelection(key)}
        >
        {props.selected === key ? `CIRCLE ${key} SELECTED` : `SELECT CIRCLE ${key}`}
      </button>
      )}   
    </div>
  );


  export default CircleSelector