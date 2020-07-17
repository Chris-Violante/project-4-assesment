import React from 'react'
import styles from '../Circles/Circles.css'

const Circle = (props) => (
    <div className='Circles'>
        {props.circles.map((key) =>
        <div
        className={props.selected === key ? 'selected' : ''}
        >{key}</div>
        )}     
    </div>
  );


  export default Circle