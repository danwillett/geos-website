import React from 'react'
import { Box, Card, CardHeader, CardMedia, CardContent, Typography, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'

interface Details {
    name: string,
    date: string,
    image: string,
    summary: string
}

interface Props {
    details: Details
}

export default function ProjectCard(props: Props) {

    const { name, date, image, summary } = props.details
    return (
        <Card sx={{ width: '100%', maxWidth: '500px'}}>
            <CardHeader title={name} subheader={date} />
            <CardMedia 
                component="img"
                height="300"
                src={image}
                alt={`project card image for ${name}`}
            />
            <CardContent sx={{ height: '50px'}}>
                <Typography variant="body2">
                    {summary}
                </Typography>
            </CardContent>

        </Card>
    )

}