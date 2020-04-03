import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export default function Input({ name, value, ...props }) {
  return (
    <input
      className={styles.input}
      type='number'
      required
      name={name}
      id={name}
      value={value}
      placeholder='wpisz sumę'
      {...props}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
Input.defaultProps = {
  value: ``,
};
