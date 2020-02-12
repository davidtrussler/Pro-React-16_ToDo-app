import React, {Component} from 'react';
import {TodoBanner} from './TodoBanner'; 
import {TodoCreator} from './TodoCreator'; 
import {TodoRow} from './TodoRow'; 

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'David', 
      todoItems: [
        {action: 'Buy Flowers', done: false}, 
        {action: 'Fix car', done: false}, 
        {action: 'Post letter', done: true}, 
        {action: 'Ring  mum', done: false}
      ], 
      newItemText: ''
    }
  }

  udpateNewTextValue = (event) => {
    this.setState({newItemText: event.target.value}); 
  }

  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [
          ...this.state.todoItems, 
          {action: this.state.newItemText, done: false}
        ], 
        newItemText: ''
      }); 
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(
      item => item.action === todo.action ? {...item, done: !item.done} : item
    )
  }); 

  todoTableRows = () => this.state.todoItems.map(
    item => 
      <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
  ); 

  render = () => {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />

        <div className="container-fluid">
          <div className="my-1">
            <input 
              className="form-control"
              value={this.state.newItemText}
              onChange={this.udpateNewTextValue}
            />
          </div>

          <button 
            className="btn btn-primary mt-1" 
            onClick={this.createNewTodo}>
              Add
          </button>
        </div>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>

          <tbody>
            {this.todoTableRows()}
          </tbody>
        </table>
      </div>
    )
  }
}
