import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Signup from './pages/Signup'
import UserLiked from './pages/UserLiked'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Netflix/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/signup" element={<Signup/>}></Route>
      <Route exact path="/player" element={<Player/>}></Route>
      <Route exact path="/movies" element={<Movies/>}></Route>
      <Route exact path="/tv" element={<TVShows/>}></Route>
      <Route exact path="/mylist" element={<UserLiked/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
