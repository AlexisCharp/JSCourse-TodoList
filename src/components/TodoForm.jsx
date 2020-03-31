import React from 'react';

function TodoForm(props) {
    function ajouterTache(event) {
        event.preventDefault()
        props.nouvelleTache({ intitule: inputText.current.value, faite: false});
        inputText.current.value = '';
    }

    const inputText = React.createRef();

    return (
        <form className="mb-3" onSubmit={ajouterTache}>
            <div className="input-group">
                <input ref={inputText} type="text" className="form-control" placeholder="ex: Nourrir le chat..." />
                <div className="input-group-append">
                    <button type="submit" className="btn gradientBtn">Ajouter</button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm;