import React, { FC } from 'react';
import style from './Loader.module.scss';

export const Loader: FC = () => (
  <div className={style.loader}>
    <div className={style.water}></div>
  </div>
);
