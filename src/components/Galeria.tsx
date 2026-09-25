import type { KepTipus } from '../adatok';
import Kiskep from './KisKep';

interface GaleriaProps {
    lista: KepTipus[];
}

function Galeria({lista}:GaleriaProps){
    return (
        <div className="galeria">
            {
                lista.map((e,i)=>{
                    return <Kiskep kepem={e} key={i}/>
                })
            }
        </div>
    )
}

export default Galeria