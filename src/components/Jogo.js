export default function Jogo({forca, Iniciar, erro, palavraTela, cor}){
    return (
        <div className='Forca'>
            <img data-test="game-image" src={forca[erro]} />
            <button onClick={Iniciar} data-test="choose-word">Escolher palavras</button>
            <h1 data-test="word" data-answer={palavraTela} className={cor}>{palavraTela}</h1>
        </div>
    )
}