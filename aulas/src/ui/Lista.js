import React, {useState} from 'react';
//import { myState} from './ListaReducer';
import useMeuHook from '../data/hooks/useMeuHook';

export default function Lista(){
    const [list, setList] = useMeuHook( []);
    const [name, setName] = useState("");

    function add(newItem){
        setList({type:'add', value:newItem});
    }

    function remove(id){
        setList({type:'remove', value:{id}});
    }

    /*function update(newItem){
        setList({type:'update',value:newItem});
    }*/


    return (
        <>
            <button onClick={() => add({id:Date.now(), name})}>Add</button>
            <input onChange={(event) => setName(event.target.value) } />
            <br/>
            <ul>
                {list.map( item => (
                    <li onClick={() => remove(item.id)} key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}