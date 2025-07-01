import { useState } from 'react'

function Card(){
  const [count, setCount] = useState(0);

  const modifyCount = () => {
    // console.log
    let newCount = count + 1;
    setCount(newCount);
  }
  
  return(
    <>
      <h1>Mi Primer Aplicacion con React</h1>
      <div className="card">
        <button onClick={modifyCount}>
          count is {count}
        </button>
        <p>
   
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default Card;