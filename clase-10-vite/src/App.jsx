

import './App.css'

import {Routes, Route} from 'react-router-dom'
import Navegador2 from './componente/Navegador2'
import Principal from './componente/Principal'
import Productos from './componente/Productos'
import Main from './componente/Main'

function App() {


  return (
    <>
      <Productos/>
      <Principal/>
      <Navegador2/>
      <Routes>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/Principal' element={<Principal/>}/>
    </Routes>
    </>
  )
}

export default App
