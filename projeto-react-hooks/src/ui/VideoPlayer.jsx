import React from 'react';
import { useRef, useEffect, useState} from 'react';
import {TimeService} from '../data/services/TimeServices';

const _selectedVideo = {
    id: 1,
    title: 'Futebol',
    duration: 8,
    url: 'https://cdn.videvo.net/videvo_files/video/premium/video0122/small_watermarked/111%20Factory_preview.webm',
    cover: 'https://cdn.videvo.net/videvo_files/video/premium/video0122/customThumbnails/soccer_thumb_01.jpg'
};

export default function VideoPlayer(){

    const video = _selectedVideo;
    const videoRef = useRef();
    const progressTimer = useRef();
    const [isPlaying, setPlay] = useState(false);
    const [progress, setProgress]= useState(0);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.addEventListener('play', play);
        videoElement.addEventListener('pause', pause);
        videoElement.addEventListener('seeked', onProgress);
        setTime(0);
        pause();

        return ()=> {
            videoElement.removeEventListener('play', play);
            videoElement.removeEventListener('pause', pause);
            videoElement.removeEventListener('seeked', onProgress);

        }
    },[video])

    useEffect(() => {
        if(isPlaying){
            progressTimer.current = setInterval(onProgress, 1000);
        }
    }, [isPlaying]);

    function play(){
        videoRef.current.play();
        setPlay(true);
    }
    function pause(){
        videoRef.current.pause();
        setPlay(false);
    }  
    function onProgress(){
        setProgress(videoRef.current.currentTime);
    }
    function onChangeProgress(event){
        setTime(event.target.value);
    }
    function setTime(time){
        videoRef.current.currentTime = time;
        onProgress();
    }

    return (
        <div className="video-player">
            <video src={video.url} ref={videoRef} />
            {video.url && (
                <>
                    <div className="controls">
                        <button onClick={isPlaying? pause: play}>{ isPlaying? '||':'|>' }</button>
                        <span>
                            {TimeService.formatTime(Math.round(progress))} / {TimeService.formatTime(video.duration)}
                        </span>
                        <input 
                            type="range" 
                            value={progress} 
                            onChange={onChangeProgress}
                            min={0} 
                            max={video.duration} 
                            step={0.1}
                        />
                    </div>
                    <h2>{video.title}</h2>
                </>
            )}
            
        </div>
    )
}