import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Songs from '../pages/Songs/Songs'

function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/songs"
                    element={<Songs />}
                />

            </Routes>

        </BrowserRouter>

    )

}

export default AppRouter