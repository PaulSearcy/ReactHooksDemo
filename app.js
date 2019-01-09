import React, {useState} from  "react"
import {hot} from "react-hot-loader"

let App = () => {
  let [ count, setCount ] = useState(0)
  let [currentColor, setCurrentColor ] = useState('red')

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <p>
          Current color is: <b>{currentColor}</b>
        </p>
        <p>
          Current count: <b>{count}</b>
        </p>
      </div>
      <div style={{ paddingTop: 40 }}>
        <p>Count controls:</p>
        <button onClick={() => setCount(count + 1)} >Increment!</button>
        <button onClick={() => setCount(count - 1)} >Decrement!</button>
      </div>
      <div>
        <p>Color controls:</p>
        <button onClick={() => setCurrentColor("green")}>Change to green!</button>
        <button onClick={() => setCurrentColor("papayawhip")}>Change to papayawhip!</button>
      </div>
      <div>
        <p>Reset changes:</p>
        <button >Reset!</button>
      </div>
    </div>
  )
}
export default hot(module)(App)