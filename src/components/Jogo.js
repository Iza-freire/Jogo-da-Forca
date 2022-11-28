export default function Jogo({forca, Iniciar}){
    return (
        <div className='Forca'>
            <img src={forca} />
            <button onClick={Iniciar}>Escolher palavras</button>
            <h1>Teste</h1>
        </div>
    )
}