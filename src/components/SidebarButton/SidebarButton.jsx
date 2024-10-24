import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from './SidebarButton.module.css';

export default function SidebarButton({ item }) {
  const currentPath = useLocation().pathname;

  return (
    <NavLink
      to={item.link}
      className={({ isActive }) =>
        isActive ? `${s.link} ${s.active}` : s.link
      }
    >
      <img
        src={currentPath === item.link ? item.activeImg : item.img}
        alt={item.page}
        className={s.img}
      />
      {item.page}
    </NavLink>
  );
}
