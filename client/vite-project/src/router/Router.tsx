import {createBrowserRouter} from "react-router";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import {MainPage} from "../pages/Main.tsx";
import AboutPage from "../pages/About.tsx";
import DoctorsPage from "../pages/Doctors.tsx";
import ServicesPage from "../pages/Services.tsx";
import ApplicationPage from "../pages/Application.tsx";
import FaqPage from "../pages/Faq.tsx";
import NewsPage from "../pages/News.tsx";
import ContactsPage from "../pages/Contacts.tsx";


export const router = createBrowserRouter([
    {
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path: '/about',
                element: <AboutPage/>
            }, {
                path: '/doctors',
                element: <DoctorsPage/>
            },
            {
                path: '/services',
                element: <ServicesPage/>
            }, {
                path: '/application',
                element: <ApplicationPage/>
            }, {
                path: '/faq',
                element: <FaqPage/>
            }, {
                path: '/news',
                element: <NewsPage/>
            }, {
                path: '/contacts',
                element: <ContactsPage/>
            },
        ]
    },
]);