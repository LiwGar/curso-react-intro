import React from "react";
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm(){

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext); 

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
      
    return (
        <form onSubmit={onSubmit}>
            <label>Insert a new ToDo</label>
            <textarea
                placeholder="New ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoFormButtonContainer">
            <button type="button" className="TodoFormButton TodoFormButtonCancel" onClick={onCancel}>Cancel</button>
            <button type="submit" className="TodoFormButton TodoFormButtonAdd">Add</button>
            </div>
        </form>
    )

}

export { TodoForm};