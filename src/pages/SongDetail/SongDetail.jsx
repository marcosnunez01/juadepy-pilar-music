
import './SongDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import songsData from '../../data/songsData'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import PianoRoundedIcon from '@mui/icons-material/PianoRounded'

function SongDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const song = songsData.find(
        (item) => item.id === Number(id)
    )

    if (!song) {
        return (
            <div className="song-detail song-not-found">
                <h1>Canción no encontrada</h1>

                <button
                    className="back-button"
                    onClick={() => navigate('/songs')}
                >
                    <ArrowBackRoundedIcon />
                    Volver al cancionero
                </button>
            </div>
        )
    }

    return (
        <div className="song-detail">

            <button
                className="back-button"
                onClick={() => navigate('/songs')}
            >
                <ArrowBackRoundedIcon />
                <span>Volver al cancionero</span>
            </button>

            <header className="song-detail-header">
                <div className="song-detail-icon">
                    <MusicNoteIcon />
                </div>

                <p className="song-detail-label">
                    JUADEPY PILAR MUSIC
                </p>

                <h1>{song.titulo}</h1>

                <p className="song-detail-subtitle">
                    Adorando a Dios con excelencia.
                </p>

                <div className="song-metadata">
                    <div className="song-meta-item">
                        <PianoRoundedIcon />
                        <span>
                            Tono: <strong>{song.tono}</strong>
                        </span>
                    </div>

                    <div className="song-meta-item">
                        <MusicNoteIcon />
                        <span>
                            {song.categoria}
                        </span>
                    </div>
                </div>
            </header>

            <section className="song-box">
                <div className="song-box-title">
                    <div className="song-box-icon">
                        <MusicNoteIcon />
                    </div>

                    <div>
                        <h2>Letra</h2>
                        <p>Letra de la canción</p>
                    </div>
                </div>

                <div className="song-lyrics">
                    {song.letra}
                </div>
            </section>

            <section className="song-box song-chords-box">
                <div className="song-box-title">
                    <div className="song-box-icon chords-icon">
                        <PianoRoundedIcon />
                    </div>

                    <div>
                        <h2>Acordes</h2>
                        <p>Referencia musical</p>
                    </div>
                </div>

                <div className="song-chords">
                    {song.acordes}
                </div>
            </section>

            <footer className="song-detail-footer">
                Todo para la gloria de Dios.
            </footer>

            <button
                className="back-button back-button-bottom"
                onClick={() => navigate('/songs')}
            >
                <ArrowBackRoundedIcon />
                <span>Volver al cancionero</span>
            </button>

        </div>
    )
}

export default SongDetail
