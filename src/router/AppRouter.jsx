import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Songs from '../pages/Songs/Songs'
import SongDetail from '../pages/SongDetail/SongDetail'


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

                <Route
    path="/song/:id"
    element={<SongDetail />}
/>

            </Routes>

        </BrowserRouter>

    )

}

export default AppRouter