import type { KepTipus } from '../adatok';
import Kiskep from './KisKep';

interface GaleriaProps {
    lista: KepTipus[],
    kivalasztKezelo:(index:number)=>void
}

function Galeria({lista, kivalasztKezelo}:GaleriaProps){
    return (
        <div className="galeria">
            {
                lista.map((e,i)=>{
                    return <Kiskep kepem={e} key={i} index={i} kivalasztKezelo={kivalasztKezelo}/>
                })
            }
        </div>
    )
}

export default Galeria