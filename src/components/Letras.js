export default function Letras({alfabeto, letraClicada, clicarLetra}){
    return ( 
    <div className='Letras'>
         {alfabeto.map((letra) => (<button  data-test="letter" onClick={() => letraClicada(letra)} key={letra} disabled={clicarLetra.includes(letra)}>{letra}</button>))}
    </div>
    )
}