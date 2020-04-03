import React from 'react';
import AppContext from '../../../context';
import styles from './Modal.module.scss';
import Form from 'components/organisms/Form/Form';
import P from 'components/atoms/P/P';

export default function Modal() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();
  let operarionTime = `${year}.${month}.${day}`;

  return (
    <AppContext.Consumer>
      {context => (
        <div className='modal is-active'>
          <div className='modal-background'></div>
          <div className='modal-card'>
            <header className='modal-card-head'>
              <p className={styles.modalTitle}>Sprawozdanie z wybierania</p>
              <P time={operarionTime} />
              <button
                className='delete'
                aria-label='close'
                onClick={context.closeModalBtn}
              ></button>
            </header>
            <section className='modal-card-body'>
              <Form />
            </section>
            <footer className='modal-card-foot'>
              <p className={styles.footerTxt}>
                Upewnij się, że masz połączenie z internetem! <br />
                Sprawdż czy wprowadzone dane są poprawne <br /> Po naciśnięciu
                Wyślij dane z formularza zostaną zapisane w bazie danych i
                wysłane emailem.
              </p>
            </footer>
          </div>
        </div>
      )}
    </AppContext.Consumer>
  );
}
/*
'modal-card-title'
*/
