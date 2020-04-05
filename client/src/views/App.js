import React, { useState, useEffect } from 'react';
import AppContext from '../context';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './App.module.scss';
import Modal from 'components/templates/Modal/Modal';
import Root from 'components/templates/Root/Root';
import List from 'components/organisms/List/List';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donatinosList, setDonatinosList] = useState([]);

  const openModalFn = () => {
    setIsModalOpen(true);
  };
  const closeModalFn = () => {
    setIsModalOpen(false);
  };

  // submiting data from modal`s form
  const submitFormFn = (e, newItem) => {
    e.preventDefault();
    setDonatinosList((prevState) => [newItem, ...prevState]);
    setIsModalOpen(false);
    // saving to database:
    axios.post('/donations', newItem).then((res) => console.log(res.data));
  };
  // app context provider
  const contextElements = {
    openModalBtn: openModalFn,
    closeModalBtn: closeModalFn,
    addDonatinos: submitFormFn,
  };
  // loading all documents from database
  useEffect(() => {
    axios
      .get('/donations')
      .then((response) => {
        setDonatinosList((prevState) => [...prevState, ...response.data]);
        console.log(`useEffect/axios- response.data: ${response.data}`);
      })
      .catch((error) => {
        console.log(`Error from useEffect:  ${error}`);
      });
  }, []);

  return (
    <AppContext.Provider value={contextElements}>
      <div className={styles.app}>
        <Root />
        <List data={donatinosList} />
        {isModalOpen && <Modal />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
