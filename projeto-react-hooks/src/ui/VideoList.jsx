import React, {useContext} from 'react';
import Video from './Video';
import {VideoStore} from '../data/video/VideoContext';

export default function VideoList(){
    
    const [videoState] = useContext(VideoStore);

    function onClick(video){
        console.log(video)
    }

    return(
        <ul className="list">
            {videoState.videos.map(item => (
                <Video key={item.id} video={item} onClick={onClick} />
            ))}
        </ul>
    );
}