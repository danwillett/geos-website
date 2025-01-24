// add footer with contact info
import * as React from 'react';
import { Box, Paper, Divider, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'

interface Props {
    setCurrentPage: (newString: string) => void
}

export default function Footer(props: Props) {
    const setCurrentPage = props.setCurrentPage
    return (
        <Paper
            sx={{
                height: 'auto',
                width: '100%',
                backgroundColor: '#333', // Adjust background color as needed
                color: '#fff', // Text color
                padding: '20px', // Padding around content
                marginTop: 'auto', // Pushes footer to the bottom of the page
            }}
        >
            <Grid container direction="row" width="100%" justifyContent="center">
                
                

            </Grid>
            
        </Paper>
        
    )
}