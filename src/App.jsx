import { useState } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './page/Landing'
import SingleHouse from './page/SingleHouse';

import { loader as landingLoader } from './page/Landing'
import { loader as singleHouseLoader } from './page/Landing'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    loader: landingLoader,
  },
  {
    path: "/singleHouse/:id",
    element: <SingleHouse />,
    loader: singleHouseLoader,
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
   </div>
  )
}

export default App
