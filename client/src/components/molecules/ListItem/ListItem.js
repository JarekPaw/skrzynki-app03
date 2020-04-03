import React from 'react';
import PropTypes from 'prop-types';
//import AppContext from '../../../context';
//import styles from './ListItem.module.scss';
//import P from 'components/atoms/P/P';

export default function ListItem({
  responsible,
  helper,
  world,
  congregation,
  time,
}) {
  return (
    <div className='content'>
      <li type='none'>
        <div className='box'>
          <article className='media'>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong>Datki z dnia: </strong> <small>{time}</small>
                  <br />
                  <strong>Datki na ogólnoświatową działalność: </strong>{' '}
                  <small>{world}</small>
                  <br />
                  <strong>Datki na potrzeby zboru: </strong>{' '}
                  <small>{congregation}</small>
                  <br />
                  <small>Odpowiedzialny - {responsible}</small>
                  <br />
                  <small>Pomagał - {helper}</small>
                  <br />
                  numer porządkowy notatki- {time}
                </p>
              </div>
            </div>
          </article>
        </div>
      </li>
    </div>
  );
}

ListItem.propTypes = {
  responsible: PropTypes.string,
  helper: PropTypes.string,
  world: PropTypes.string,
  congregation: PropTypes.string,
  time: PropTypes.string,
};
ListItem.defaultProps = {
  responsible: `nie podano!`,
  helper: `nie podano!`,
  world: `nie podano!`,
  congregation: `nie podano!`,
  time: `nie podano!`,
};
