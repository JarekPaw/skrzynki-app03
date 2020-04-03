import React from 'react';
import AppContext from '../../../context';
//import styles from './Form.modules.scss';
import Button from 'components/atoms/Button/Button';
import InputArea from 'components/molecules/InputArea/InputArea';
import SelectArea from 'components/molecules/SelectArea/SelectArea';

class Form extends React.Component {
  state = {
    responsible: '',
    helper: '',
    world: '',
    congregation: '',
    time: '',
  };

  // puts date & time to each new object
  newTimeFn = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let time = new Date().getHours();
    let minutes = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let operarionTime = `${year}.${month}.${day} ${time}:${minutes}:${sec}`;

    this.setState({
      time: operarionTime,
    });
  };

  // gets data from inputs and saves them to the state object.
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.newTimeFn();
  };
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <form
            autoComplete='off'
            onSubmit={e => context.addDonatinos(e, this.state)}
          >
            <SelectArea
              onChange={this.handleInputChange}
              value={this.state.responsible}
              name='responsible'
              labelname='os. odpowiedz.'
            />
            <SelectArea
              onChange={this.handleInputChange}
              value={this.state.helper}
              name='helper'
              labelname='pomocnik'
            />
            <InputArea
              onChange={this.handleInputChange}
              value={this.state.world}
              name='world'
              labelname='ogólnośw. działal.'
            />
            <InputArea
              onChange={this.handleInputChange}
              value={this.state.congregation}
              name='congregation'
              labelname='potrzeby zboru'
            />

            <Button>Wyślij</Button>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}
export default Form;
