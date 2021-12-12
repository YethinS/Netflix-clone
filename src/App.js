import React from 'react'
import { actions,originals } from './urls/urls';
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner';
import './Components/App.css';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix originals'/>
      <RowPost url={actions} title='Actions' isSmall/>
    </div>
  )
}

export default App
