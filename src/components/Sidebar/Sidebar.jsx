import './Sidebar.css'

import MusicNoteIcon from '@mui/icons-material/MusicNote'
import EventIcon from '@mui/icons-material/Event'
import GroupsIcon from '@mui/icons-material/Groups'
import PianoIcon from '@mui/icons-material/Piano'
import QueueMusicIcon from '@mui/icons-material/QueueMusic'
import SettingsIcon from '@mui/icons-material/Settings'

function Sidebar() {

    return (

        <aside className="sidebar">

            <h2 className="sidebar-logo">
                🎵 JUADEPY
            </h2>

            <nav>

                <button className="sidebar-item">
                    <MusicNoteIcon />
                    <span>Cancionero</span>
                </button>

                <button className="sidebar-item">
                    <EventIcon />
                    <span>Ensayos</span>
                </button>

                <button className="sidebar-item">
                    <GroupsIcon />
                    <span>Integrantes</span>
                </button>

                <button className="sidebar-item">
                    <PianoIcon />
                    <span>Tonos</span>
                </button>

                <button className="sidebar-item">
                    <QueueMusicIcon />
                    <span>Playlists</span>
                </button>

                <button className="sidebar-item">
                    <SettingsIcon />
                    <span>Configuración</span>
                </button>

            </nav>

        </aside>

    )

}

export default Sidebar