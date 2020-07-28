import React, {useState, useReducer} from 'react';
import {myReducer, myState} from './ListaReducer';

export default function Lista(){
    const [list, setList] = useReducer(myReducer, myState);
    const [name, setName] = useState("");

    function add(newItem){
        setList({type:'add', value:newItem});
    }

    function remove(id){
        setList({type:'remove', value:{id}});
    }

    function update(newItem){
        setList({type:'update',value:newItem});
    }


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