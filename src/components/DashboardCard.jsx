import './DashboardCard.css'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function DashboardCard({ icono, titulo, onClick }) {

    return (

        <Card
            className="dashboard-card"
            onClick={onClick}
        >

            <CardContent>

                <div className="dashboard-icon">
                    {icono}
                </div>

                <Typography
                    variant="h6"
                    className="dashboard-title"
                >
                    {titulo}
                </Typography>

            </CardContent>

        </Card>

    )

}

export default DashboardCard