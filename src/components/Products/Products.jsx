import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Products.css"
import { Link, useParams } from 'react-router-dom';

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/notes/')
      .then(data => {
        setNotes(data.data);
      });
  }, []);

  return (
    <div className='cards'>
      {notes.map((note, key) => (
        <div key={key} className='card'>
          <h2>{note.name}</h2>
          <h3>{note.data_create}</h3>
          <Link to={`/note/${note.id}`}>View Note</Link>
        </div>
      ))}
    </div>
  );
}

export default Notes;