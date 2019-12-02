import React from "react";
import styled from "styled-components";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTask: ""
        }
    }

    handleChanges = event => {
        this.setState({
            newTask: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask)
        this.setState({
            newTask: ""
        })
    }


    render(){
        console.log("rendering");
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="task"
                placeholder="Enter Task to be Completed"
                onChange={this.handleChanges}
                value={this.state.newTask}
                />
                <button>Add Task!</button>
            </form>
        );
    }
}

export default TodoForm;