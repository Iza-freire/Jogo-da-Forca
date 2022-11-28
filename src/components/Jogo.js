export default function Jogo({forca, Iniciar, erro, palavraTela, cor}){
    return (
        <div className='Forca'>
            <img src={forca[erro]} />
            <button onClick={Iniciar}>Escolher palavras</button>
            <h1 className={cor}>{palavraTela}</h1>
        </div>
    )
}