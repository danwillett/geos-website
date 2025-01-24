import React, { useState } from 'react'
import { Container } from '@mui/material'


import Home from './pages/Home.tsx'
import Services from './pages/Services.tsx'
import Projects from './pages/Projects.tsx'
import People from './pages/People.tsx'
import Equipment from './pages/Equipment.tsx'
import Footer from './Footer.tsx'
import Header from './Header.tsx'

export default function AppContainer() {

    const [currentPage, setCurrentPage] = useState('Home')
    const [tabValue, setTabValue] = React.useState(1)

    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />
        } 
        else if (currentPage === 'Services') {
            return <Services />
        }
        else if (currentPage === 'Equipment'){
            return <Equipment />
        }
        else if (currentPage === 'People'){
            return <People />
        }
        
        
        else if (currentPage === 'Projects'){
            return <Projects />
        }

        // } else if (currentPage === 'Data & Tools') {
        //     return <Data />
        // }
    }

    const handlePageChange = (page: string) => {
        setCurrentPage(page)
    }
    const handleTabChange = (event, newValue: number) => {
        
        console.log("tab was clicked: ", newValue)
        setTabValue(newValue)
    };

    return (

        <Container maxWidth={false} disableGutters={true}>
            {/* Header */}
            <Header currentPage={currentPage} handlePageChange={handlePageChange} tabValue={tabValue} setTabValue={setTabValue} handleTabChange={handleTabChange} />
            {renderPage()}
            <Footer setCurrentPage={setCurrentPage} />
        </Container>
    )
}