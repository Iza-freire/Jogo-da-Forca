export default function Chute({desabilitarTextInput, chute, setChute, chutarpalavra}){
    return ( 
      <div className='Input'>
        <h2>Já sei a palavra!</h2>
        <input disabled={desabilitarTextInput} value={chute} onChange={(e) => setChute(e.target.value)}/>
        <button onClick={chutarpalavra}>Chutar</button>
      </div>
    )
}