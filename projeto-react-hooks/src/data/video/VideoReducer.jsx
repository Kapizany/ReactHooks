import {StorageService} from '../services/StorageServices';

export const videoInitialState = {
    selectedVideo: {},
    videos: StorageService.get('videoList',[])
}

console.log(videoInitialState.videos);

export function videoReducer(state, action){
    switch(action.type){
        case 'add': 
            const newList = [...state.videos, action.value];
            StorageService.set('videoList',newList);
            return {...state, videos: newList};
        case 'select': 
            console.log(action.value);
            return {...state, selectedVideo: action.value};
        default: return state;
    }
}