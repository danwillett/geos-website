import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import theme from '../../theme.tsx'

import ProjectCard from '../ProjectCard.tsx'
import FeaturedImage from '../FeaturedImage.tsx'


export default function Projects(){

    const featuredImage = {
        title: "Projects",
        image: "../media/images/Sedgwick-3244.jpg",
        imageText: "Sedgwick Reserve",
        credit: "Matt Perko"
    }
    
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
                <FeaturedImage post={featuredImage} main={false} />
                </Grid>
            </Box>

            <Container maxWidth='xl'>
                <Grid container direction="row" justifyContent="center">

                    <Grid size={12} sx={{backgroundColor: theme.palette.lightLightGray.main}}>
                        {/* <Box pt={10} pb={2}>
                            <Typography variant='h3' m={5} className="header">
                            Our Work
                            </Typography>
                        </Box> */}
                        <Typography variant='h6' m={5}>
                            At the GEOS Center, we deliver cutting-edge geospatial solutions for industries like urban planning, environmental monitoring, transportation, public health, and disaster management. Our projects range from designing smart cities using tools like ArcGIS Urban and QGIS, to tracking deforestation and climate change with Google Earth Engine and drone imagery. We streamline logistics with ArcGIS Network Analyst, support public health by mapping disease outbreaks with Python and R, and manage utilities using LiDAR and FME. With technologies like ArcGIS, PostGIS, and Tableau, we transform complex data into actionable insights, solving real-world problems efficiently and effectively.
                        </Typography>
                    </Grid>
                    <Grid size={12}>
                        <Box pt={10} pb={2}>
                            <Typography variant='h3' m={5} className="header">
                            Projects
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