import React from 'react';
import s from './EditProfile.module.css';
import avatar from '../../images/avatar.png';
import edit from '../../images/edit-icon.svg';

export default function EditProfile() {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className={s.editProfile}>
      <div className={s.avatarContainer}>
        <img src={avatar} alt="Avatar" className={s.avatar} />
        <button className={s.editButton}>
          <img src={edit} alt="Edit" />
        </button>
      </div>
      <form action="" className={s.form}>
        <label className={s.label}>
          Your Name
          <input type="text" className={s.input} placeholder="Charlene Reed" />
        </label>
        <label className={s.label}>
          User Name
          <input type="text" className={s.input} placeholder="Charlene Reed" />
        </label>
        <label className={s.label}>
          Email
          <input
            type="email"
            className={s.input}
            placeholder="charlenereed@gmail.com"
          />
        </label>
        <label className={s.label}>
          Password
          <input type="password" className={s.input} placeholder="**********" />
        </label>
        <label className={s.label}>
          Date of Birth
          <input
            type="text"
            className={s.input}
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
            placeholder="25 January 1990 "
          />
        </label>
        <label className={s.label}>
          Present Address
          <input
            type="text"
            className={s.input}
            placeholder="San Jose, California, USA"
          />
        </label>
        <label className={s.label}>
          Permanent Address
          <input
            type="text"
            className={s.input}
            placeholder="San Jose, California, USA"
          />
        </label>
        <label className={s.label}>
          City
          <input type="text" className={s.input} placeholder="San Jose" />
        </label>
        <label className={s.label}>
          Postal Code
          <input type="text" className={s.input} placeholder="45962" />
        </label>
        <label className={s.label}>
          Country
          <input type="text" className={s.input} placeholder="USA" />
        </label>
        <button className={s.submitButton} onClick={submitForm}>
          Save
        </button>
      </form>
    </div>
  );
}
