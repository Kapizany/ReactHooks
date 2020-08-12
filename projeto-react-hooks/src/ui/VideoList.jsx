import React, {useContext, useMemo} from 'react';
import Video from './Video';
import {VideoStore} from '../data/video/VideoContext';

export default function VideoList(){
    
    const [videoState, videoDispatch] = useContext(VideoStore);
    const videoList = useMemo(() => {
        function onClick(video){
            videoDispatch({
                type: 'select',
                value: video
            });
            //console.log(video);
        }

        return videoState.videos.map(item => (
            <Video key={item.url} video={item} onClick={onClick} />
        ));

    },[videoState.videos, videoDispatch]);

    

    return(
        <ul className="list">
            {videoList}
        </ul>
    );
}