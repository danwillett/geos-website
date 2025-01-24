import * as React from 'react';
import {Container, AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Tab, Tabs} from '@mui/material'
import Grid from '@mui/material/Grid2'
import MenuIcon from '@mui/icons-material/Menu';
import NavigationTab from './NavigationTab.tsx';

import theme from '../theme.tsx';


interface Props {
  window?: () => Window;
  handlePageChange: (newString: string) => void;
  handleTabChange: (newValue: number) => void;
  currentPage: string;
  setTabValue: (newValue: number) => void;
  tabValue: number
}

const drawerWidth = 240;
const navItems = [
  { name: 'Home', value: 1 },
  { name: 'Services', value: 2 },
  { name: 'Equipment', value: 3 },
  { name: 'Projects', value: 4 },
  { name: 'People', value: 5 },
  { name: 'Request Services', value: 6 },
];

console.log(navItems);


export default function Header(props: Props) {
  const { window, handlePageChange, handleTabChange, tabValue, setTabValue } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" alignContent="center" sx={{ my: 2 }}>
        GEOS Center
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.value}>
            <ListItemButton sx={{ textAlign: 'center' }} onClick = {() => handlePageChange(item.name, item.value)} >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  console.log("tabValue: ", tabValue)

  return (
    <Container maxWidth="xl">
      <AppBar position="static" color="white" elevation={0}>

        <Grid container alignItems="center">
            <Grid size={{xs: 11, lg: 10, xl: 9}}>  
                <Typography variant="h4" sx={{fontWeight: 'bold', marginY: '16px', paddingX: '16px'}}>
                    GIS Earth Observing Services
                </Typography>
                
            </Grid>
            <Grid size={{xs: 1}} sx={{display: { md: 'none' } }}>
              <IconButton
                      aria-label="open drawer"
                      color="black"
                      edge="start"
                      onClick={handleDrawerToggle}
                  >
                      <MenuIcon  />
                </IconButton>
            </Grid>
            <Grid size={{md: 12, lg: 10, xl: 9}} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box>
                    <Tabs
                      onChange={handleTabChange}
                      value={tabValue}
                      textColor="secondary"
                      indicatorColor="secondary"
                      >
                        {navItems.map((tabInfo) => (
                          <Tab
                            onClick={() => handlePageChange(tabInfo.name)}
                            value={tabInfo.value}
                            label={tabInfo.name}
                            key={tabInfo.name}
                            sx={{
                                textTransform: 'none'
                            }}
                        />
                        ))}
                    </Tabs>
                </Box>
            </Grid>
        </Grid>
        
      </AppBar>
      <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
          keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
      >
          {drawer}
      </Drawer>
    </Container>
  );
}
