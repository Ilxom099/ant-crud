import React, {Suspense, lazy} from 'react';
import {Routes, Route} from "react-router-dom";

const Layout = lazy(() => import("../components/layout"));
const Xodimlar = lazy(() => import("../pages/xodimlar"));
const Lavozim = lazy(() => import("../pages/lavozim"));
const Daraja = lazy(() => import("../pages/daraja"));

function Routing(props) {
    return (
        <Suspense fallback={"Loader"}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/xodimlar"} element={<Xodimlar/>} />
                    <Route path={"/lavozim"} element={<Lavozim/>} />
                    <Route path={"/daraja"} element={<Daraja/>} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default Routing;