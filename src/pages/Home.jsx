import './Home.css'
import PrimaryButton from '../components/PrimaryButton'
import Header from '../components/Header'
import DashboardCard from '../components/DashboardCard'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <>
            <Header />

            <div className="home">

                <h1 className="titulo">
                    🎵 JUADEPY PILAR MUSIC
                </h1>

                <p className="subtitulo">
                    Adorando a Dios con excelencia.
                </p>

                <p className="versiculo">
                    Colosenses 3:23
                </p>

               <PrimaryButton
    texto="INGRESAR"
    onClick={() => navigate('/dashboard')}
/>

                <DashboardCard
                    icono={<MusicNoteIcon />}
                    titulo="Cancionero"
                />

                <p className="version">
                    Versión 0.3 Beta
                </p>

            </div>
        </>
    )
}

export default Home