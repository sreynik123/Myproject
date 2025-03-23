import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import People from './pages/People.jsx'

import { Provider } from 'react-redux'
import { store } from './store.js'
import Register from './pages/Register.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContectUs from './pages/ContectUs.jsx'

import Login from './pages/Login.jsx'
import Upcomming from './pages/Upcomming.jsx'

import Moviepopular from './pages/Moviepopular.jsx'


import MovieDetail from './pages/MovieDetail.jsx'
import Top from './pages/Top.jsx'
import NowPlaying from './pages/Nowplaying.jsx'




const router=createBrowserRouter(
  [ {
    path: '/',
    element: <MainLayout/>,
    children: [
    {
    path: "/",
    element: <Home/>
    },
   
    {
    path: '/People',
    element: <People/>
    },
  
    {
      path: '/login',
      element: <Login/>
      },
      {
        path: '/Moviepopular',
        element: <Moviepopular/>
        },
        {
          path: '/Top',
          element: <Top/>
          },
      
    {
      path: '/Upcomming',
      element: <Upcomming/>
      },
      {
        path: '/Nowplaying',
        element: <NowPlaying/>
        },

      {
        path: '/Register',
        element: <Register/>
        },
        {
          path: '/AboutUs',
          element: <AboutUs/>
          },
          {
            path: '/ContectUs',
            element: <ContectUs/>
            },
            {
              path: '/movie/:id',
              element: <MovieDetail/>
              },
             
          
          ],
        
         errorElement:<Error/>
        },
    
    
   ] );
   
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
   <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
    </StrictMode>,
  );
  

