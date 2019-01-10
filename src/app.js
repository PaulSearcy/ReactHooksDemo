import React, {useState} from 'react'
import {hot} from 'react-hot-loader'
import {toHTML} from './utilities.js'

let App = () => {
    let [targetURL,
        setTargetURL] = useState('n/a')
    let [links,
        setLinks] = useState('n/a')
    let [scripts,
        setScripts] = useState('n/a')
    let [page,
        setPage] = useState('n/a')

    const scanURL = async targetURL => await fetch(targetURL)
        .then(data => data.text())
        .then(data => toHTML(data))

    return (
        <div>
            <div style={{
                textAlign: "center"
            }}>
                <p>
                    Target URL:
                    <b>{targetURL}</b>
                </p>
                <p>
                    Link Count:
                    <b>{links}</b>
                </p>
                <p>
                    Script Count:
                    <b>{scripts}</b>
                </p>
            </div>
            <div style={{paddingTop: 40}}>
                <p>Target URL Input:</p>
                <input onChange={()=> setTargetURL(this.value)}></input>
                <button onClick={() => setPage(scanURL(targetURL))}>Scan</button>
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