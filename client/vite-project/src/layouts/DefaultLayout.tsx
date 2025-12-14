import {Outlet} from "react-router";
import Header from "../components/Header.tsx";

const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default DefaultLayout;