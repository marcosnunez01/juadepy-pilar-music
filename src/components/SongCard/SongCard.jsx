import './SongCard.css'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import MusicNoteIcon from '@mui/icons-material/MusicNote'

import { useNavigate } from 'react-router-dom'


function SongCard({ id, titulo, tono, categoria }) {



    const navigate = useNavigate()


    return (

        <Card
            className="song-card"
           onClick={() => navigate(`/song/${id}`)}
        >

            <CardContent>


                <MusicNoteIcon className="song-icon"/>


                <Typography
                    variant="h6"
                    className="song-title"
                >
                    {titulo}
                </Typography>


                <p>
                    🎹 Tono: {tono}
                </p>


                <p>
                    🎵 {categoria}
                </p>


            </CardContent>


        </Card>

    )

}


export default SongCard