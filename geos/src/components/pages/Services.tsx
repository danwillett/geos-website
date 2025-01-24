import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import theme from '../../theme.tsx'

export default function Services(){

    const services = [
        {
            name: "UAS Surveys",
            icon: "https://cdn-icons-png.flaticon.com/512/1830/1830867.png"
        },
        {
            name: "Geospatial Analytics",
            icon: "https://cdn-icons-png.flaticon.com/512/272/272471.png"
        },
        {
            name: "App Development",
            icon: "https://cdn-icons-png.flaticon.com/512/5044/5044729.png"
        },

]

    return (
        <Box py={10} sx={{backgroundColor: theme.palette.mist.main, color: theme.palette.mist.contrastText}}>
            <Container maxWidth='xl'>
                <Grid container spacing={3}>
                {services.map((service) => (
                    <Grid size={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography variant='h3' align='center' sx={{fontWeight: 'bold', flexShrink: '1'}}>{service.name}</Typography>
                        <Box 
                            my={4}
                            sx={{
                                width: '50%',
                                maxWidth: '500px',                            
                                height: '300px',
                                backgroundImage: `url(${service.icon})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}
                            
                        />
                    </Grid>
                ))}
                </Grid>
            </Container>
            
        </Box>
    )
}