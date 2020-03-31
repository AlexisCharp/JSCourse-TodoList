import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    const taches = props.taches;

    return (
        <ul className="list-group">
            {taches.map((tache, index) => <Todo key={index} id={index} tache={tache} onCheck={props.onCheck} onDelete={props.onDelete}/>)}
        </ul>
    )
}

export default TodoList;