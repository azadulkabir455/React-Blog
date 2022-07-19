import React from 'react'
import "./Resources/Css/global.scss"
import family from "./Resources/Images/doctorFamily.png"

export default function App() {
  return (
   <>
    <h1>React Blog</h1>
    <img src={family} alt="Family photos" />
   </>
)
}
