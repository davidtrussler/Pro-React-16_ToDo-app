import React, {Component} from 'react';

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

  render = () => {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
          ({this.state.todoItems.filter(t => !t.done).length} items to do)
        </h4>

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
      </div>
    )
  }
}
