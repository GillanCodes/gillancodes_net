import { useState } from 'react'
import Routes from "./router/index";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes />
    </>
  )
}

export default App
