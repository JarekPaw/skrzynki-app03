import React from 'react';
import Select from 'components/atoms/Select/Select';
import Label from 'components/atoms/Label/Label';
import styles from './SelectArea.module.scss';

export default function SelectArea({ ...props }) {
  return (
    <div className={styles.wrapper}>
      <Label {...props} />
      <Select {...props} />
    </div>
  );
}
