import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import background from "./space.avif";


function App() {
  const [count, setCount] = useState(0)

  return (
    <body className="body" style={{backgroundImage: `url(${background})` }}>
        <div className="App">
              <div>
                <a href="#" target="_blank">
                  <img src="/perfil.jpeg" className="perfil" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
          <h1 className="title">Hello World!</h1>
          <div className="card">
    
            <h3 className="title">
            Olá eu sou o Arthur Duarte! 👋
            </h3>

          </div>
          <p className="text">
          Cursando sexto semestre de Tecnologia em Sistemas para Internet, Técnico de Informática,🧑‍💻!
          </p>
          <p className="text">
          Tenho como objetivo entrar no mercado de trabalho como desenvolvedor Front-end
          </p>
        </div>
    </body>
  )
}

export default App
