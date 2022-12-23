import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import NaveCard from './elements/NaveCard';
import Home from './pages/Home';
import Lanzaderas from './pages/Lanzaderas';
function App()  {

  //Const necesaria para crear rutas de frontend
  const MainRoute = createBrowserRouter([
    //Ruta principal de la interfaz de usuario
    {
      path:"/",
      element: <Home />,
    },
    {
      path:"/naves/lanzaderas",
      element:<Lanzaderas/>
    },
    //Ruta para testear componentes
    {
      path:"/test",
      element: <NaveCard
       title="Vehículos Lanzadera"
       URIimage="./lanzadera.jpg"
       route="/naves/lanzaderas" />
     },
  ])

  return (
    <div className="App">
     <RouterProvider router={MainRoute} />
    </div>
  );
}

export default App;
