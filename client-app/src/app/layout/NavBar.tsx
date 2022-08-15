import Box from '@mui/material/Box';
import { AppBar, Button, Container, Toolbar } from '@mui/material';

export default function NavBar() {
  const baseUrl = 'http://localhost:3000'
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} href={baseUrl}>Reactivities</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} href={baseUrl+ '/activities'}>Activities</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} href={baseUrl+ '/createActivity'}>Create Activity</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


