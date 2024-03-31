import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.js'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'


import Home from './pages/Home.jsx'
import Addpost from './pages/Addpost.jsx'
import Allposts from './pages/Allposts.jsx'
import Contactus from './pages/Contactus.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'

import {AuthLayout} from './components/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Allposts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Addpost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
        {
          path: "/contact-us",
          element:(
            <AuthLayout authentication>
                 {" "}
              <Contactus/>
            </AuthLayout>
          )
        },

        {
            path: "/comapny",
            element: (
                <AuthLayout authentication>
                {" "}
             <Contactus/>
           </AuthLayout>
            ),
        },
    ],
},
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    
    </Provider >
  </React.StrictMode>,
)
