import React, {useState} from "react";
import App from "./App";

function MultiApps(props) {
  const keys = Object.keys(localStorage).sort();
  const [appList, setAppList] = useState(keys);

  function ajoutListe() {
    appList.push(Date.now());
    setAppList([...appList]);
  }

  return (<div className="col-md">
    <h1>React ToDo List</h1>
    <p>Application de gestion de tâches</p>
    <button className="btn btn-light" onClick={ajoutListe}>
      Ajouter un ToDo List
    </button>

    {appList.map(key => <App storageKey={key} key={key}/>)}
  </div>);
}

export default MultiApps;