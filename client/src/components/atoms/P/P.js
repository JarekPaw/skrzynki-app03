import React from 'react';
import PropTypes from 'prop-types';
import styles from './P.module.scss';

export default function P({ time }) {
  return <div className={styles.p}>{`Dzień: ${time}`}</div>;
}
P.propTypes = {
  time: PropTypes.string,
};
P.defaultProps = {
  time: null,
};
