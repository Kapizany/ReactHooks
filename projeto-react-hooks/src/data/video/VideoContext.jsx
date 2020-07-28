import React,{createContext, useReducer} from 'react';
import {videoInitialState, videoReducer} from './VideoReducer';


export const VideoStore = createContext(videoInitialState);
const {Provider} = VideoStore;

export function VideoContext(props){
    const [state, dispatch] = useReducer(videoReducer, videoInitialState);
    return (
        <Provider value={[state, dispatch]}>
            {props.children}
        </Provider>
    )
}