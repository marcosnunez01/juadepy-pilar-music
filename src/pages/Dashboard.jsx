import './Dashboard.css'

import DashboardCard from '../components/DashboardCard'

import MusicNoteIcon from '@mui/icons-material/MusicNote'
import EventIcon from '@mui/icons-material/Event'
import GroupsIcon from '@mui/icons-material/Groups'
import PianoIcon from '@mui/icons-material/Piano'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import SettingsIcon from '@mui/icons-material/Settings'
import Sidebar from '../components/Sidebar/Sidebar'
function Dashboard() {

    return (

    <div className="dashboard-layout">

        <Sidebar />

        <main className="dashboard-content">

            <h1>Bienvenido 👋</h1>

            <p className="dashboard-subtitle">
                Todo para la gloria de Dios
            </p>

            <div className="dashboard-grid">

                <DashboardCard
                    icono={<MusicNoteIcon />}
                    titulo="Cancionero"
                />

                <DashboardCard
                    icono={<EventIcon />}
                    titulo="Ensayos"
                />

                <DashboardCard
                    icono={<GroupsIcon />}
                    titulo="Integrantes"
                />

                <DashboardCard
                    icono={<PianoIcon />}
                    titulo="Tonos"
                />

                <DashboardCard
                    icono={<QueueMusicIcon />}
                    titulo="Playlists"
                />

                <DashboardCard
                    icono={<SettingsIcon />}
                    titulo="Configuración"
                />

            </div>

        </main>

    </div>

)

}

export default Dashboard