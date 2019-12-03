import React from "react";
import styled from "styled-components";

const AddButton = styled.button`
    margin-top: 10px;
    margin-left: 2px;
    border-radius: 5px;
    background-color: #035D8F;
    color: white;
    padding: 5px;
`

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
                placeholder="Enter a Chore"
                onChange={this.handleChanges}
                value={this.state.newTask}
                />
                <AddButton>Add Task!</AddButton>
            </form>
        );
    }
}

export default TodoForm;