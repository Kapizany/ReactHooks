import React,{createContext} from 'react';

const _state = {
    selectedVideo: {
        id: 1,
        title: 'Futebol',
        duration: 8,
        url: 'https://cdn.videvo.net/videvo_files/video/premium/video0122/small_watermarked/111%20Factory_preview.webm',
        cover: 'https://cdn.videvo.net/videvo_files/video/premium/video0122/customThumbnails/soccer_thumb_01.jpg'
    },
    videos: [
        {
            id: 1,
            title: 'Futebol',
            duration: 8,
            url: 'https://cdn.videvo.net/videvo_files/video/premium/video0122/small_watermarked/111%20Factory_preview.webm',
            cover: 'https://cdn.videvo.net/videvo_files/video/premium/video0122/customThumbnails/soccer_thumb_01.jpg'
        },
        {
            id: 2,
            title: 'Trafego - Carros',
            duration: 8,
            url: 'https://cdn.videvo.net/videvo_files/video/premium/video0038/small_watermarked/la_freewaysnight2_preview.webm',
            cover: 'https://cdn.videvo.net/videvo_files/video/premium/video0038/thumbnails/la_freewaysnight2_small.jpg'
        },
        {
            id: 3,
            title: 'Viagem',
            duration: 20,
            url: 'https://cdn.videvo.net/videvo_files/video/premium/video0121/small_watermarked/25%20Alpen%20Gold%20day%204_preview.webm',
            cover: 'https://cdn.videvo.net/videvo_files/video/premium/video0121/thumbnails/25 Alpen Gold day 4_small.jpg'
        }
    ]
}

export const VideoStore = createContext(_state);
const {Provider} = VideoStore;

export function VideoContext(props){
    return (
        <Provider value={[_state]}>
            {props.children}
        </Provider>
    )
}