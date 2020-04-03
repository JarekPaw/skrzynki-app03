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
    setDonatinosList(prevState => [...prevState, newItem]);
    setIsModalOpen(false);
    // saving to database:
    axios
      .post('http://localhost:5100/donations', newItem)
      .then(res => console.log(res.data));
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
      .get('http://localhost:5100')
      .then(response => {
        setDonatinosList(prevState => [...prevState, ...response.data]);
        console.log(`from axios in useEffect response.data: ${response.data}`);
      })
      .catch(error => {
        console.log(`blad z useEffect:  ${error}`);
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

/*
--------------------------------------------------------------------------------------------
const fromDb = () => {
    fetch('http://localhost:5100')
      .then(res => res.json())
      .then(data => {
        console.log(`objekt 0 helper data z fn fromDb - ${data[0].helper}`);        
        setDonatinosList(prevState => [...prevState, ...data]);
        return;        
      })
      .catch(err => console.log(`blad fn fromDb - ${err}`));
  };
  fromDb();
  console.log('log z po fromDB, donationList: ' + donatinosList);
---------------------------------------------------------------------------------------------

  return (
    <AppContext.Provider value={contextElements}>
      <Router>
        <div className={styles.app}>
        <Route path='/' component={Root} />
          <Root />
          <List data={donatinosList} />
          {isModalOpen && <Modal />}
        </div>
      </Router>
    </AppContext.Provider>
  );
}
*/
