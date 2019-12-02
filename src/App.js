import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm  from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
import styled from "styled-components";

const ToDoList = [
  {
    id: 123,
    task: "Clean the Room",
    completed: false
  }
]

const AppDiv = styled.div`
  text-align: center;
  width: 800px;
  margin: 0 auto;
`
const TitleStyle = styled.h2`
  font-family: 'Solway', serif;
  font-size: 40px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
`
const MainDiv = styled.div`
  border: 1px solid black;
  height: 97vh;
`

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
      <MainDiv>
        <TitleStyle>Don't Procrastinate! Here is your list of Chores!</TitleStyle>
      <AppDiv>
        
        <TodoForm 
        addTask={this.addTask} 
        />
        <TodoList 
        todo={this.state.todo} 
        toggleCompleted={this.toggleCompleted} 
        clear={this.clearCompleted}
        />
      </AppDiv>
      </MainDiv>
    );
  }
}

export default App;



