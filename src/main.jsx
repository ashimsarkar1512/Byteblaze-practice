
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import BookMarks from './pages/BookMarks.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'

const router=createBrowserRouter([

{
  path:'/',
  element:<Mainlayout></Mainlayout>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/blogs',
      element:<Blogs></Blogs>
    },
    {
      path:'/bookmarks',
      element:<BookMarks></BookMarks>
    }
  ]
},



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
