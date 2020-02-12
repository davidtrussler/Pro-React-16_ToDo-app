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
      ]
    }
  }

  udpateNewTextValue = (event) => {
    this.setState({newItemText: event.target.value}); 
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [
          ...this.state.todoItems, 
          {action: task, done: false}
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
          <TodoCreator callback={this.createNewTodo} />
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
