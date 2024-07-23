
import './App.css'

import { useCatImage } from './Hooks/useCatImage'
import { useCatFact } from './Hooks/useCatFact'
import { Otro } from './components/Otro'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
/* const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size)50color=red&json=true` */



function App() {

  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })


  const handleClick = async () => {
    refreshRandomFact()
  }
  return (
    <main className='flex flex-col w-full justify-center align-center text-center p-24'>
      <h1 className='text-[30px] uppercase font-bold'>App de gatitos</h1>
      <button className="bg-blue-500 text-white w-[60px] rounded-sm font-bold mx-auto my-3" onClick={handleClick}>Search </button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img className='w-[400px] h-[600px] mx-auto object-cover my-3' src={imageUrl} alt={`Image extracted using the first three words for ${fact}`}></img>}

      <Otro></Otro>
    </main>
  )
}

export default App
