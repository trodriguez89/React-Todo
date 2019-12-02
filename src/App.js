import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm  from "./components/TodoComponents/TodoForm";

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
  }


  render() {
    console.log(ToDoList);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;

const ToDoList = [
  {
    id: "",
    task: "",
    completed: ""

  }
]

