import React from 'react';

function Todo(props) {
    return (
        <li className="list-group-item">
            <input type="checkbox" id={'t'+props.id} checked={props.tache.faite} onChange={() => props.onCheck(props.tache)} />{' '}
            <label htmlFor={'t'+props.id} className="nameTask">{props.tache.intitule}</label>
            <button className="deleteTask" onClick={() => props.onDelete(props.tache)}></button>
        </li>
    );
}

export default Todo;