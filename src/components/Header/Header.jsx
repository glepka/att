import React, { useState, useEffect } from 'react';
import s from './Header.module.css';
import avatar from '../../images/avatar.png';
import HeaderButton from '../HeaderButton/HeaderButton';
import setting from '../../images/settings-gear.svg';
import notification from '../../images/notification.svg';
import search from '../../images/search.svg';
import burgerButton from '../../images/burger-button.svg';

export default function Header({ title }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (width > 1000) {
    return (
      <header className={s.header}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.container}>
          <label className={s.label}>
            <img src={search} alt="Search" className={s.labelIcon} />
            <input
              type="text"
              className={s.input}
              placeholder="Search for something"
            />
          </label>

          <HeaderButton img={setting} alt="Setting" />
          <HeaderButton img={notification} alt="Notification" />
          <img src={avatar} alt="Avatar" className={s.avatar} />
        </div>
      </header>
    );
  } else {
    return (
      <header className={s.headerMobile}>
        <div className={s.containerMobile}>
          <button className={s.burgerButton}>
            <img src={burgerButton} alt="Burger Button" />
          </button>
          <h2 className={s.title}>{title}</h2>

          <img src={avatar} alt="Avatar" className={s.avatar} />
        </div>
        <label className={s.label}>
          <img src={search} alt="Search" className={s.labelIcon} />
          <input
            type="text"
            className={s.input}
            placeholder="Search for something"
          />
        </label>
      </header>
    );
  }
}
