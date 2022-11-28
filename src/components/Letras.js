export default function Letras({alfabeto}){
    return ( 
    <div className='Letras'>
        {alfabeto.map((letra) => <button disabled={true}>{letra}</button>)}
    </div>
    )
}