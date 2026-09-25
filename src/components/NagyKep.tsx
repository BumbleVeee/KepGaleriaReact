import type { KepTipus } from "../adatok"
import './NagyKep.css'

interface NagyKepProps{
    kepem: KepTipus
}

export default function NagyKep({kepem}:NagyKepProps) {
    return (
        <>
            <div className="nagykep">
                <div className="kep">
                    <img src={kepem.kep} alt={kepem.leiras} />
                </div>
                <p>{kepem.leiras}</p>
            </div>
        </>
    )
}
