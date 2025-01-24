import * as React from 'react';
import { Container, Paper, Typography, Box, Button }from '@mui/material';

import Grid from '@mui/material/Grid2';


import { makeStyles } from '@mui/styles';

interface FeaturedVideoProps {
  post: {
    description: string;
    imageText?: string;
    title: string;
    credit?: String;
  };
  main: boolean
}



export default function FeaturedVideo(props: FeaturedVideoProps) {

    const { post } = props;

    return (
        <Paper
        sx={{
            position: 'relative',
            width: '100%',
            maxHeight: '80vh'
        }}
        
        >
            <Box>
                <video
                    src="geos-website/media/videos/banner.mp4"
                    autoPlay
                    muted
                    loop
                    style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80vh',
                    objectFit: 'cover',
                    }}
                />
            </Box>
            
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        justifyContent: 'end',
                        gap: '6px',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        color: 'white',
                        zIndex: 1, 
                    }}
                >
                <Container maxWidth="xl">
                    <Typography variant='h1' className='overlay-text' px={5}>{post.title}</Typography>
                    <Typography variant='h4' className='overlay-text' px={5}>{post.description}</Typography>
                    <Box
                        px={5}
                        my={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'start',
                            alignItems: 'center',
                            gap: '16px',
                            paddingBottom: '50px'
                            
                        }}
                        >
                        <Button variant='contained' color='darkCoral' className="button-text">Our Services</Button>
                        <Button variant='contained' color='darkCoral' className="button-text">Request Services</Button>
                    </Box>
                </Container>
            </Box>
        


        </Paper>
    );
}