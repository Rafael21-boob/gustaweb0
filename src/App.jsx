import { useState } from 'react'
import login from './assets/forza.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div id='img'></div>
        <div id='login'>
          <section>
            <img src={login} alt="" />
            <h2>Fazer Login:</h2>
            <input type="text" placeholder='Usuario' />
            <input type="password" placeholder='Senha' />
            <button>Entrar</button>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
