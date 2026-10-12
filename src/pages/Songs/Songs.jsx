import './Songs.css'
import { useState } from 'react'
import SongCard from '../../components/SongCard/SongCard'
import songsData from '../../data/songsData'

import MusicNoteIcon from '@mui/icons-material/MusicNote'



function Songs() {

    const [busqueda, setBusqueda] = useState('')

    const cancionesFiltradas = songsData.filter((song) =>
        song.titulo.toLowerCase().includes(busqueda.toLowerCase())
    )

    return (
        <div className="songs-page">

            <h1>
                <MusicNoteIcon />
                Cancionero
            </h1>

            <p className="songs-subtitle">
                Biblioteca musical de JUADEPY PILAR MUSIC
            </p>
            
            <input

                className="search-input"

                type="text"

                placeholder="Buscar canción..."

                value={busqueda}

                onChange={(e) => setBusqueda(e.target.value)}

             />

            <div className="songs-grid">

                {
                    cancionesFiltradas.map((song) => (

                        <SongCard
                            key={song.id}

                            id={song.id}
                            titulo={song.titulo}
                            tono={song.tono}
                            categoria={song.categoria}
                        />

                    ))
                }

            </div>


        </div>

    )

}


export default Songs