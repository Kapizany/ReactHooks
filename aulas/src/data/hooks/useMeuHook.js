import  {useReducer} from 'react';

function myReducer(state, action){
    switch(action.type ){
        case 'add': return [...state, action.value];
        case 'remove':return state.filter(item => item.id !== action.value.id);
        case 'update':return state.map(item => (item.id !== action.value.id ? item : action.value));
        default: return state;
    }
}

export default function useMeuHook(initialValue){
    const [meuArray, setMeuArray] = useReducer(myReducer,initialValue);

    return [meuArray, setMeuArray];
}