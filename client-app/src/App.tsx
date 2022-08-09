import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { List, Divider, AppBar, Box, Toolbar, Typography, ListItem } from '@mui/material';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reactivities
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      <List>
        {activities.map((activity:any) => (
          <ListItem key={activity.id}>
            {activity.title}
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
