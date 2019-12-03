import React from "react"

const Todo = props => {
    let styleClassName = "task";
    if (props.task.completed){
        styleClassName = styleClassName + " completed ";
    }

    return (
            <div className={styleClassName}
            onClick={() => props.toggle(props.task.id)}>
            <p>{props.task.task}</p>
            </div>
        
    );
}

export default Todo;