import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import theme from '../../theme.tsx'


import FeaturedVideo from '../FeaturedVideo.tsx'
import ProjectCard from '../ProjectCard.tsx'

// GIS and Earth Observing Services
export default function Home() {
    console.log(theme)
    const featuredImage = {
        title: 'GEOS Center',
        description:
          "Getting all your geospatial data needs done",
        video: "../media/videos/banner_vid.mp4",
        // imageText: 'Colombia Mountain Landscape, credit: Jeff Gale',
        // credit: 'Photo by Jeff Gale, 2012'
      };

      const featuredProjects = [
        {
          name: "Wildfire Mapping",
          date: "August 2023",
          summary: "Monitored active Mountain Fire using GIS skills.",
          image: "https://bren.ucsb.edu/sites/default/files/2020-04/Thomas%20fire_%20Eliason2.jpg"
        },
        {
          name: "Oceano Drone Surveys",
          date: "February 2023 - May 2024",
          summary: "Conducted 12 drone surveys with multispectral and RGB sensors, covering over 200km2 of coastal dune fields.",
          image: "https://highway1roadtrip.com/wp-content/uploads/2019/03/The-Oceano-Dunes.jpg"
        },
        {
          name: "Isla Vista Bicycle & Ped Counts",
          date: "June 2024 - November 2024",
          summary: "Deployed Eco-Counters at various sites throughout Isla Vista, CA to count bicycle and pedestrian traffic at key corridors of interest.",
          image: "https://cloudfront.traillink.com/photos/goleta-beach-trail_162828_st.jpg"
        },
      ]

    return (
        <Box>

          <Box sx={{width: '100%'}}>     
            {/* Title Spread */}
            <Grid size={12}>
              <FeaturedVideo post={featuredImage} main={true} />
            </Grid>
          </Box>

          <Container maxWidth='xl'>
            <Grid container direction="row" justifyContent="center">

              <Grid size={12}>
                <Box pt={10} pb={2}>
                  <Typography variant='h3' m={5} className="header">
                    Our Work
                  </Typography>
                </Box>
                <Typography variant='h6' m={5} mb={10}>
                A geospatial data center offering UAS surveys, data analytics, and GIS app development provides comprehensive solutions for capturing, analyzing, and visualizing spatial data. Using drones equipped with advanced sensors, the center conducts aerial surveys to gather high-resolution imagery and other geospatial data. This data is then processed and analyzed to extract insights, such as mapping, change detection, and asset management. Additionally, the center develops custom GIS applications, allowing clients to interact with and visualize geospatial data, supporting better decision-making in fields like urban planning, agriculture, and environmental monitoring. 
                </Typography>
              </Grid>

            {/* Featured Projects */}
              <Grid size={12} sx={{backgroundColor: theme.palette.lightLightGray.main}}>
                
                  <Box pt={5} pb={2}>
                    <Typography variant='h3' m={5} className="header">
                      Featured Projects
                    </Typography>
                  </Box>

                  <Grid container justifyContent="space-evenly" m={5} spacing={3}>
                  {featuredProjects.map((project) => (
                        <Grid size={{xs: 10, md:5, lg: 4}} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                          <ProjectCard details={project} />
                        </Grid>
                      ))}

                  </Grid>             
              </Grid>            
            
            </Grid>
          </Container>
        </Box>
    )
}