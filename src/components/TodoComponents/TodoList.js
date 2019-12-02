import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
            {props.todo.map(item => (
                <Todo key={item.id} task={item.task} />
            ))}
        </div>
    );
}

export default TodoList;