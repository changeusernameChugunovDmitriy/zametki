import "./Products.css"
import { useEffect, useState } from 'react';
import axios from 'axios'

function Note_create() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const create_note = () => {
        const data ={
            name: name,
            desc: desc
        }
        axios.post('http://127.0.0.1:8000/api/v1/create/', data)
             .then(response => {
                console.log("Note created", response.data)
             })
             .catch(error => {
                console.log("error", error)
             })
    }
  return (
    <div>
        <h1>Создание заметки</h1>
        <p>Название</p><input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Название'/><br></br>
        <p>Описание</p><input className='big_input' type="text" value={desc} onChange={(event) => setDesc(event.target.value)}placeholder='Описание'/><br></br>
        <button onClick={create_note}>Создать</button>
    </div>
  );
}

export default Note_create;
