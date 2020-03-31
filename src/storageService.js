export function saveToLocalStorage(key, taches) {
    localStorage.setItem(key, JSON.stringify(taches));
}

export function loadFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key)) || []; 
}