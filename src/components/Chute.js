export default function Chute({desabilitarTextInput}){
    return ( 
      <div className='Input'>
        <h2>Já sei a palavra!</h2>
        <input disabled={desabilitarTextInput}/>
        <button>Chutar</button>
      </div>
    )
}