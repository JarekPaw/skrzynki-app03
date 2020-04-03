import React from 'react';
import AppContext from '../../../context';
import PropTypes from 'prop-types';
//import styles from './Button.module.scss';

export default function Button({ children, ...props }) {
  return (
    <AppContext.Consumer>
      {context => (
        <div className='buttons'>
          {children === `Wyślij` ? (
            <button className='button is-primary' type='submit'>
              {children}
            </button>
          ) : (
            <button
              className='button is-primary is-inverted is-outlined'
              onClick={context.openModalBtn}
            >
              {children}
            </button>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
