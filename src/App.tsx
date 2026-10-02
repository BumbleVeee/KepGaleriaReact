import { useState } from 'react'
import './App.css'
import { KEPLISTA, type KepTipus} from './adatok'
import Galeria from './components/Galeria'
import NagyKep from './components/NagyKep'

function App() {

  const [lista] = useState<KepTipus[]>(KEPLISTA)
  const [i, setI] = useState(0)

  function kivalasztKezelo(index:number){
    console.log("kivalasztott index: ", index)
    /* tudjuk hanyadik kepre kattintottunk,
    tudjuk ohgy melyik kepet kellene a nagyképbe betölteni,
    modositjuk az index erteket */
    /* ez tilos:  i++  ! */
    /* ezt lehet:  setI(12)   */
    /* ez is tilos:  setI(i++)  azert nem lehet i=i+1   ! */
    /* ezt lehet:  setI(i+1)   */
    setI(index)
  }

  function kattintBalra(){
    console.log("kattintBalra: ", i === 0 ? lista.length - 1 : i - 1)
    setI(prev => prev === 0 ? lista.length - 1 : prev - 1)
  }

  function kattintJobbra(){
    console.log("kattintJobra: ", i === lista.length - 1 ? 0 : i + 1)
    setI(prev => prev === lista.length - 1 ? 0 : prev + 1)
  }

  return (
    <>
      {/* react fragment */}
      <header>
        <h1>Macskák!!!</h1>
      </header>
      <section>
        <NagyKep kepem={KEPLISTA[i]} index={0} kattintBalra={kattintBalra} kattintJobbra={kattintJobbra}/>  {/* <NagyKep kepem={KEPLISTA[0]}/> : függvény referencia   <NagyKep kepem={KEPLISTA[index]}/>  */} 
      </section>
      <article>
        {/* ide kerül a macska */}
        <Galeria lista={lista} kivalasztKezelo={kivalasztKezelo}/> {/* függvény referencia */}
      </article>
      <footer><p>Gubek Vera</p></footer>
    </>
  )
}

export default App
