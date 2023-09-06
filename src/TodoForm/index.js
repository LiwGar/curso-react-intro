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
            <label>Inserta un nuevo ToDo</label>
            <textarea
                placeholder="Nueva tarea"
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