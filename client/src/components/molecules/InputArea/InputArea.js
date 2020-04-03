import React from 'react';
import styles from './InputArea.module.scss';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

export default function InputArea({ ...props }) {
  return (
    <div className={styles.wrapper}>
      <Label {...props} />
      <Input {...props} />
    </div>
  );
}

/*
<div class='field is-grouped is-grouped-multiline'>
      <div class='control'>
        <div class='tags has-addons'>
          <span class='tag is-primary'>on gitter</span>
          <Input class='tag is-primary' />
        </div>
      </div>
    </div>
*/
