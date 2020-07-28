import React, {useState, useContext} from 'react';
import {VideoStore} from '../data/video/VideoContext';

export default function NewVideoForm(){
    const [, videoDispatch] = useContext(VideoStore);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [url, setUrl] = useState('');
    const [cover, setCover] = useState('');

    function save(){
        const NewVideo = {
            title,
            duration,
            url,
            cover
        };
        //salvar
        videoDispatch({
            type:'add',
            value: NewVideo
        });

        reset();
    }

    function reset() {
        setTitle('');
        setDuration('');
        setUrl('');
        setCover('');
    }

    return (
        <div className="form">
            <label>Título:</label>
            <input type="text" 
                   value={title} 
                   onChange={(event) => setTitle(event.target.value)} />

            <label>Duration:</label>
            <input type="text" 
                   value={duration} 
                   onChange={(event) => setDuration(event.target.value)} />
            
            <label>Vídeo:</label>
            <input type="text" 
                   value={url} 
                   onChange={(event) => setUrl(event.target.value)} />

            <label>Capa:</label>
            <input type="text" 
                   value={cover} 
                   onChange={(event) => setCover(event.target.value)} />
            
            <button onClick={save}>Salvar</button>
        </div>
    )
}