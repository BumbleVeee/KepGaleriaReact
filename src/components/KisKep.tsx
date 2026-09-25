import './KisKep.css';
import type { KepTipus } from "../adatok";

interface KisKepProps {
    kepem: KepTipus;
    index: number;
    kivalasztKezelo:(index:number)=>void;
}

export default function Kiskep({kepem, index, kivalasztKezelo}:KisKepProps){
    return (
        <>
            <div className="kiskep" onClick={() => kivalasztKezelo(index)}>
                <img src={kepem.kep} alt={kepem.leiras} />
            </div>
        </>
    )
}
