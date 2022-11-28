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



export default function App() {
  const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const alfabeto = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
  ]
  
  const [erro, setErros] = useState(0)
  const [desabilitarTextInput, setDesabilitarTextInput] = useState(true)
  const [palabraSorteada, setPalavraSorteada] = useState([])
  const [palavraTela, setPalavraTela] = useState([])
  const [clicarLetra, setCLicarLetra] = useState(alfabeto)


  function Iniciar(){
      setDesabilitarTextInput(false)
      gerandoPalavras()
      setErros(0)
      setCLicarLetra([])

    } 

  function gerandoPalavras(){
    const i = Math.floor(Math.random()* palavras.length)
    const Palavra = palavras[i] 
    const percorrrerPalavra = Palavra.split("")
    setPalavraSorteada(percorrrerPalavra)
    console.log(Palavra)

    let traco = []
        for (let i in percorrrerPalavra) {
            traco.push(" _")
        }
    setPalavraTela(traco)
  }
 
  function letraClicada(letra){
        if (palabraSorteada.includes(letra)){
     acertou(letra)
    } else{
      errou(letra)
    }
  }
  function acertou(letra){
    const novaPalavrajogo = [...palavraTela]
    palabraSorteada.forEach((LetraPalavra, i) => {
      if(palabraSorteada[i] === letra){
        novaPalavrajogo[i] = LetraPalavra
      }
    })
     setPalavraTela(novaPalavrajogo)
  }
  
  function errou(){
    const mudarImagemErros = erro + 1
    setErros (mudarImagemErros)
  }

  return (
    <div className='conteudoTela'>

    <Jogo forca={forca} erro={erro} Iniciar={Iniciar} palavraTela={palavraTela}/>

    <Letras alfabeto={alfabeto} letraClicada={letraClicada} clicarLetra={clicarLetra}/>

    <Chute desabilitarTextInput={desabilitarTextInput}/>
      
    </div>

  );
}

