import React from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.scss';

export default function Label({ name, labelname }) {
  return (
    <label className={styles.label} htmlFor={name}>
      {labelname}
    </label>
  );
}
Label.propTypes = {
  name: PropTypes.oneOf([`world`, `congregation`, `helper`, `responsible`])
    .isRequired,
  labelname: PropTypes.string,
};
Label.defaultProps = {
  labelname: `opis datków`,
};
