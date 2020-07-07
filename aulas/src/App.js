import React, {Component, useState, useEffect, useRef} from 'react';
import './App.css';
document.title = "Aulas";
class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState(state => ({counter: state.counter + 1}))
  }

  render(){
    return(
      <button onClick={this.increment}>Classe: {this.state.counter} </button>
    )
  }
}

function Counter2(props){
  //const [counter, setCounter] = useState(0);
  const counter = useRef(0);
  const [title, setTitle] = useState('');
  //const button = createRef();
  const button = useRef();
  
  /*useEffect(() => {
    console.log(3333);
    document.title = title
  }, [title])*/

  useEffect(() => {
    setInterval(() => {  
      console.log(counter);
    },2000)
  }, [])

  /*useEffect(() => {
    function updateScroll(){
      setTitle(window.scrollY);
    }
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])*/

  return (
    <>
      <br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br />
      <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      <br /> <br /> <br />
      {title}
      <br /> <br /> <br />
      <button ref={button} onClick={() => counter.current += 1}>
        Função: {counter.current}
      </button>
      <br /> <br /> <br /><br /> <br /> <br /><br /> <br /> <br />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
    </div>
  );
}

export default App;
