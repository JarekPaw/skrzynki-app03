import React from 'react';
import styles from './Select.module.scss';

export default function Select({ ...props }) {
  return (
    <select className={styles.select} {...props} required>
      <option value='' disabled>
        Wybierz osobę
      </option>
      <option>Berezecki Paweł</option>
      <option>Kercher Mariusz</option>
      <option>Jansens Luk</option>
      <option>Ilchev Anderi</option>
      <option>Tsviatko</option>
      <option>Berezecka J.</option>
      <option>Kercher A.</option>
      <option>Żewuska E.</option>
    </select>
  );
}
