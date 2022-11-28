export default function Jogo({forca, Iniciar, erro, palavraTela,}){
    return (
        <div className='Forca'>
            <img src={forca[erro]} />
            <button onClick={Iniciar}>Escolher palavras</button>
            <h1>{palavraTela}</h1>
        </div>
    )
}