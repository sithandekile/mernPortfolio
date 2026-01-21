import React from 'react'
import {Navbar} from './components/navbar' 
import {Home }from './pages/home'

export const App=()=>{
  return(
    <main >
      <Navbar/>
      <div>
        <Home/>
        </div>
      </main>
  )
} 