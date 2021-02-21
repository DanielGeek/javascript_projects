
import React, { useState } from 'react'
import data from './data.json'
import Loader from './Loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

console.log(data)

function App() {

  const [loaderList, setLoaderList] = useState([])

  const handleClick = () => {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      que linda aplicación hecha en React.js
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="logo platzy" width={40} />
      </p>
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
