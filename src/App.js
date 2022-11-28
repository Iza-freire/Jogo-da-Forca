import React, { useState } from 'react'

import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

import Chute from './components/Chute'
import Jogo from './components/Jogo'
import Letras from './components/Letras'

import palavras from "./palavras";



function App() {

  const alfabeto = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
  ]
  

  const [desabilitarTextInput, setDesabilitarTextInput] = useState(true)



  function Iniciar(){
      setDesabilitarTextInput(false)
    } 

  return (
    <div className='conteudoTela'>

    <Jogo forca={forca0}  Iniciar={Iniciar}/>

    <Letras alfabeto={alfabeto}/>

    <Chute desabilitarTextInput={desabilitarTextInput}/>
      
    </div>

  );
}

export default App;
