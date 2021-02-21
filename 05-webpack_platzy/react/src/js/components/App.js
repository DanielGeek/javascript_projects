
import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'

console.log(data)

function App() {

  const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      que linda aplicación hecha en React.js
      <ul>
        {
          loaderList.map(dataLoader => <Loader key={dataLoader.id} {...dataLoader} />)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </div>
  )
}

export default App
