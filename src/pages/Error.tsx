import React, { FC } from 'react';
import style from './Error.module.scss';

export const Error: FC = () => (
  <div className={style.err}>
    <div className={style.wrp}>
      <div className={style.circle}>
        <h2 className={style.tittle}>404</h2>
        <p className={style.text}>Упс...Что-то пошло не так...</p>
      </div>
    </div>
  </div>
);
