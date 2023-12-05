import react, { Children } from "react";
import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Restuarant from "./components/Restaurant";



// This is main app


const App = () => (
    <div className="container">
        <Header />
        <Outlet />
    </div>
)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/aboutus',
                element: <About />
            },
            {
                path: '/privacy',
                element: <Privacy />
            },
            {
                path:'/restaurant/:resId',
                element:<Restuarant/>
            }
        ]
    },
    {
        path: '/aboutus',
        element: <About />
    },
    {
        path: '/privacy',
        element: <Privacy />
    }
    ,
    {
        path:'/restaurant/:resId',
        element:<Restuarant/>
    }
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);