import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Products.css"
import { Link, useParams, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function Note() {
    const [note, setNote] = useState({});
    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/note/${id}`)
          .then(data => {
            setNote(data.data);
          });
      }, [id]);
    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/api/v1/delete/${id}`)
          .then(response => {
            navigate('/'); // Use navigate function to redirect
          })
          .catch(error => {
            console.error('Failed to delete note:', error);
          });
    };
  
    return (
        <div>
          <div className='card_one'>
            <div className='note'>
              <h2>{note.name}</h2>
              <p>{note.desc}</p>
            </div>
            <p className='date'>Дата редактирования:<br></br>{note.data_redact}</p>
            <p className='date'>Дата создания:<br></br>{note.data_create}</p>
            <button onClick={handleDelete}>delete</button>
          </div>
        </div>
    );
}

export default Note;