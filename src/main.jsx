import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Blog from './components/Blog/Blog.jsx'
// import Blog1 from './components/BlogList/TopSpecialistForIVF.jsx'
import TopSpecialistForIVF from './components/BlogList/TopSpecialistForIVF.jsx'




const router = createBrowserRouter([ 
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: "",
        element: <Home />
      },
      {path: "/about",
        element: <About />
      },
      {path: "/contact",
        element: <Contact />
      },
      {path: "/blog",
        element: <Blog />
      },
      {path: "/blog/TopSpecialistForIVF",
        element: <TopSpecialistForIVF />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
