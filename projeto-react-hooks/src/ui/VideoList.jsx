import React, {useContext} from 'react';
import Video from './Video';
import {VideoStore} from '../data/video/VideoContext';

export default function VideoList(){
    
    const [videoState, videoDispatch] = useContext(VideoStore);

    function onClick(video){
        videoDispatch({
            type: 'select',
            value: video
        });
        //console.log(video);
    }

    return(
        <ul className="list">
            {videoState.videos.map(item => (
                <Video key={item.url} video={item} onClick={onClick} />
            ))}
        </ul>
    );
}