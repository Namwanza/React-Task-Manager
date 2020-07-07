import React, { Component } from 'react';
import './App.css';
import TaskOwner from './TaskOwner/TaskOwner';
import Tasks from './Tasks/Tasks';
import Attendants from './Attendants/Attendants';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled.button `
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      padding: 10px;
      border-style: none;
      border-radius: 5px;
      &:hover {
        background-color: ${ props => props.alt ? 'blue': 'black' };
        color: white;
        cursor: pointer
      }
`;

  const Heading = styled.h1 `
      color: ${props => props.head ? 'black': 'red'}
  `;

class App extends Component {
  state = {
    name: '',
    task: '',
    persons: [
     { id: 'kdkos', name: 'Ronnie', age: '27 years old'},
     { id: 'jjsjsi', name: 'Namwanza', age: '27 years old'},
     { id: 'uysusu', name: 'Namatovu', age: '25 years old'}
    ],
    showTask: true
  }

  showTaskHandler = () => {
    this.setState({
      showTask: true
    })
  }

  hideTaskHandler = () => {
    this.setState({
      showTask: false
    })
  }

  nameTaskChangedHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  TaskChangedHandler = (event) => {
    this.setState({
      task: event.target.value
    })
  }
  render () {
    
    return (
      <div className="App">
         <Heading head = {this.state.showTask ? true: undefined}>React Task Manager</Heading>
 
        <Button 
          onClick = {this.showTaskHandler}
          style = {{textTransform: 'capitalize', margin: '10px'}}
          variant = "contained"
          color = "secondary"
        >Show TaskOwner</Button>
        <StyledButton
          alt = {this.state.showTask ? true : undefined}
          onClick = {this.hideTaskHandler}>
          Attend to Assigned Tasks
        </StyledButton>
       
        {
          this.state.showTask ? 
            <TaskOwner 
              name = {this.state.name}
              task = {this.state.task}
              changed = {this.nameTaskChangedHandler}
              change = {this.TaskChangedHandler}
            />
            :
            <div>
              <Tasks>
                <p> {this.state.name} </p>
                <p> {this.state.task} </p>
              </Tasks>
              <hr />
              <Attendants>
                <span>{this.state.persons.map(p => {
                  return (
                   <ul key = {p.id}>
                     <li>{p.name}</li>
                   </ul>
                  );
                })}</span>
              </Attendants>
            </div>
        }
      </div>
    );
  }
}

export default App;
