import type { KepTipus } from "../adatok"
import './NagyKep.css'

interface NagyKepProps{
    kepem: KepTipus
    index: number
    kattintBalra: () => void
    kattintJobbra: () => void
}

export default function NagyKep({kepem, kattintBalra, kattintJobbra}:NagyKepProps) {
    return (
        <>
            <div className="nagykep">
                <div className="balGomb">
                    <button className="bal" onClick={() => kattintBalra()}>&lt;</button>
                </div>
                <div className="kep">
                    <img src={kepem.kep} alt={kepem.leiras} />
                </div>
                <p>{kepem.leiras}</p>
                <div className="jobbGomb">
                    <button className="jobb" onClick={() => kattintJobbra()}>&gt;</button>
                </div>
            </div>
        </>
    )
}
