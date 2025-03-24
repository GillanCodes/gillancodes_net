import { useState } from 'react'
import Routes from "./router/index";
import "./styles/index.scss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes />
    </>
  )
}

export default App
