import React from "react";
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

export default function People() {

    return (
        <Box>
            <Box sx={{width: '100%'}}>     
            {/* Title Spread */}
                <Grid size={12} my={3}>
                    <Typography variant='h3' m={5} className="header">The GEOS Team</Typography>
                </Grid>
            </Box>
            <Container maxWidth='xl'>
                Woo! People Cards (?)
            </Container>
        </Box>
    )
}