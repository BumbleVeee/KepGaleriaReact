import { useState } from 'react'
import './App.css'
import { KEPLISTA, type KepTipus} from './adatok'
import Galeria from './components/Galeria'
import NagyKep from './components/NagyKep'

function App() {

  const [lista] = useState<KepTipus[]>(KEPLISTA)

  function kivalasztKezelo(index:number){
    console.log("kivalasztott index: ", index)
  }


  return (
    <>
      {/* react fragment */}
      <header>
        <h1>Macskák!!!</h1>
      </header>
      <section>
        <NagyKep kepem={KEPLISTA[0]}/> {/* függvény referencia */}
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
