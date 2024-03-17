import React, {useState} from "react";
import './Header.css'
import logo from '../../img/alabuga.jpg'
import Notes from "../Products/Products";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Note from "../Products/Product";
import Note_create from "../Products/create_product";

export default function Header(){
    const [showProducts, setShowProducts] = useState(false)
    return(
        <Router>
        <div>
            <div className="Header">
        <div><Link to="/"><img className="logo" src={logo} alt="фото" /></Link></div>
        <div className="btn_all">
            <Link to="/notification">Уведомления</Link>
            <Link to="/create">Создать заметку</Link>
        </div>
        </div>
        <hr/>
        <Routes>
            <Route path='/' element={<Notes/>}/>
            <Route path="/note/:id" element={<Note/>} />
            <Route path="/delete/:id" element={<Note/>} />
            <Route path="/create" element={<Note_create/>} />
        </Routes>
        </div>
        </Router>
    )
}