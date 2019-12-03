import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const ClearButton = styled.button`
    padding: 5px;
    color: white;
    background-color: #035D8F;
    border-radius: 5px;
`;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
            {props.todo.map(item => (
                <Todo 
                key={item.id} 
                task={item} 
                toggle={props.toggleCompleted} 
                delete={props.clear}
                />
            ))}
            <ClearButton onClick={props.clear}>Clear Completed Tasks</ClearButton>
        </div>
    );
}

export default TodoList;