import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm  from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const ToDoList = [
  {
    id: "",
    task: "",
    completed: ""

  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: ToDoList
    }
  }

  addTask = newTaskText => {
    const newTask = {
      id: Date.now(),
      task: newTaskText,
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    })
    console.log(newTask)
  }

  toggleCompleted = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id){
          return {...item, completed: !item.completed}
        } else {
          return item;
        }
        
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => {
        return item.completed === false;
      })
    })
  }

  render() {
    
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        addTask={this.addTask} 
        />
        <TodoList 
        todo={this.state.todo} 
        toggleCompleted={this.toggleCompleted} 
        clear={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;



