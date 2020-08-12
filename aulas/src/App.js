import React, {Component, /*useState, useEffect,*/ useRef, useEffect} from 'react';
import './App.css';
import ThemeProvider from './data/ThemeProvider';
import Teste from './ui/Teste';
import Lista from './ui/Lista';
import ExemploUseCallback from './ui/ExempleUseCallback';
import {useOnlineStatus} from './data/hooks/useOnlineStatus';
import useOnScreen from './data/hooks/useOnScreen';
import useKeyPress from './data/hooks/useKeyPress';

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
  //const [title, setTitle] = useState('');
  //const button = createRef();
  const button = useRef();
  
  /*useEffect(() => {
    console.log(3333);
    document.title = title
  }, [title])*/

  /*useEffect(() => {
    setInterval(() => {  
      console.log(counter);
    },2000)
  }, [])*/

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
    <br /> <br/><br />
      <button ref={button} onClick={() => counter.current += 1}>
        Função: {counter.current}
      </button>
      <br /> <br /> <br />
    </>
  )
}

function App() {
  const isOnline = useOnlineStatus();
  const buttonRef = useRef();
  const isVisible = useOnScreen(buttonRef, '10px');
  const isEnterPressed = useKeyPress('Enter'); 

  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);
  return (
    <div className="App">
      <ThemeProvider>
        <Counter />
        <Counter2 />
        <Teste />
      </ThemeProvider>
      <Lista />
      <ExemploUseCallback />
      {isOnline ? 'Você está conectado': 'Você desconectou!'} <br />
      {isEnterPressed? 'Enter está pressionado' : 'Nada de Enter'}
      <br /> <br /> <br /> <br /> <br /> <br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <button ref={buttonRef}> Botão </button>
    </div>
  );
}

export default App;
