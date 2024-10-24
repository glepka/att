import React from 'react';
import s from './HeaderButton.module.css';

export default function HeaderButton({ img, alt }) {
  return (
    <button className={s.button}>
      <img src={img} alt={alt} />
    </button>
  );
}
