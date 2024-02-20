import React from 'react'
import RootLayout from './components/layouts/RootLayout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route path='/'/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
