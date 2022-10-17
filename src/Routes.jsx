import {createBrowserRouter} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Home from './Components/Home';
import Login from './Components/Login';
import Orders from './Components/Orders';
import Registration from './Components/Registration';
import PrivateRoutes from './PrivateRoutes';
import Root from './Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <PrivateRoutes><Home/></PrivateRoutes>
            },
            {
                path: '/orders',
                element: <PrivateRoutes><Orders/></PrivateRoutes>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'registration',
                element: <Registration/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'faq',
                element: <Faq/>
            }


        ]
    }
])

export default router;