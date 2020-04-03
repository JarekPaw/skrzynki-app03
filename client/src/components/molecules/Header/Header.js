import React from 'react';
import Button from 'components/atoms/Button/Button';

export default function Header() {
  return (
    <section className='hero is-primary is-small'>
      <div className='hero-body'>
        <div className='container'>
          <h3 className='title'>Pomoc przy wybieraniu ze skrzynek</h3>
          <h5 className='subtitle'>
            wypełnij formularz i prześlij informację do sługi kont
          </h5>
          <Button btnFn='openModal'>
            <b>Nowe datki</b>
          </Button>
        </div>
      </div>
    </section>
  );
}
