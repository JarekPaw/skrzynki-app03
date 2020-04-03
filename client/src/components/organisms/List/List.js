import React from 'react';
import PropTypes from 'prop-types';
//import AppContext from '../../../context';
import styles from './List.module.scss';
import ListItem from 'components/molecules/ListItem/ListItem';

export default function List({ data }) {
  return (
    <>
      {data.length ? (
        <ul className={styles.list}>
          {data.map(item => (
            <ListItem key={item.time} {...item} />
          ))}
        </ul>
      ) : (
        <p className={styles.listNoItem}>✔ jeszcze nic nie ma ✔</p>
      )}
    </>
  );
}

List.propTypes = {
  data: PropTypes.array,
};
List.defaultProps = {
  data: [],
};
