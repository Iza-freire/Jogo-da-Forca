export default function Jogo({forca, Iniciar, palavraTela}){
    return (
        <div className='Forca'>
            <img src={forca} />
            <button onClick={Iniciar}>Escolher palavras</button>
            <h1>{palavraTela}</h1>
        </div>
    )
}