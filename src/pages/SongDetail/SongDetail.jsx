import './SongDetail.css'

import { useParams } from 'react-router-dom'

import songsData from '../../data/songsData'


function SongDetail(){

    const { id } = useParams()


    const song = songsData.find(
        (item) => item.id === Number(id)
    )


    if (!song) {

        return (

            <h1>
                Canción no encontrada
            </h1>

        )

    }


    return (

        <div className="song-detail">


            <h1>
                🎵 {song.titulo}
            </h1>


            <p>
                🎹 Tono original: {song.tono}
            </p>


            <p>
                🎵 Categoría: {song.categoria}
            </p>



            <div className="song-box">

                <h2>
                    Letra
                </h2>

                <p>
                    {song.letra}
                </p>

            </div>



            <div className="song-box">

                <h2>
                    Acordes
                </h2>

                <p>
                    {song.acordes}
                </p>

            </div>



        </div>

    )

}


export default SongDetail