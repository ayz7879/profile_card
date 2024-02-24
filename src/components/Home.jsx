import React from 'react'
import { useState } from 'react'
import '../Css/Home.css'

const Home = () => {
    const [text,setText] = useState('')

    const LowerCase = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
     }
    const UpperCase = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
     }
    const ClearText = () => {
        let newtext = ''
        setText(newtext)
     }
  return (
    <>
    <div className="home">
        <h1>Welcome To Text utils Web</h1>
        <textarea value={text} onChange={(e)=>setText(e.target.value)} name="" id="" cols="150" rows="15"></textarea>
        <div className="btn">
            <button onClick={LowerCase}>LowerCase</button>
            <button onClick={UpperCase}>UpperCase</button>
            <button onClick={ClearText}>Clear All</button>
        </div>
    </div>
    <div className="preview">
        <h1>Preview-----</h1>
        <h2>{text}</h2>
    </div>
    </>
  )
}

export default Home