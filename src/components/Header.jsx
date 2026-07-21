import './Header.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MusicNoteIcon from '@mui/icons-material/MusicNote'

function Header() {
    return (
        <AppBar position="static" color="primary" elevation={3}>

            <Toolbar>

                <MusicNoteIcon sx={{ mr: 2 }} />

                <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 700 }}
                >
                    JUADEPY PILAR MUSIC
                </Typography>

            </Toolbar>

        </AppBar>
    )
}

export default Header